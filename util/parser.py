import time

from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from py2neo import Graph, NodeMatcher, RelationshipMatcher, Node
from selenium.webdriver.remote.webelement import WebElement

from util import Chrome
from util.config import config
from util.utils import detect_path_trace


class Parser:

    def __init__(self, chrome: Chrome):
        self.driver = chrome.driver
        self.chrome = chrome
        graph = Graph(config['neo4j']['host'],
                      auth=(config['neo4j']['username'], config['neo4j']['password']),
                      name=config['neo4j']['name'])
        self.node_matcher = NodeMatcher(graph)
        self.relationship_matcher = RelationshipMatcher(graph)

    # 执行抽象的检测过程
    def handle(self) -> bool:
        # 获取开始节点
        start_node = self.node_matcher.match('Intention', name='start').first()
        return self.execute_abstract_step(start_node)

    def execute_abstract_step(self, prev_node: Node) -> bool:
        # 遍历每一条关系
        r_type = 'next'
        current_detect_status = False
        current_detect_node = None
        next_intention_nodes = sorted([next_rel.end_node for next_rel in
                                       self.relationship_matcher.match((prev_node, None), r_type=r_type).all()],
                                      key=lambda x: x.get('bias') or 100, reverse=True)
        for cur_node in next_intention_nodes:
            # 判断是否满足当前关系成立的条件
            execute_real_step_result = self.execute_real_step(cur_node)
            if execute_real_step_result:
                current_detect_node = cur_node
                current_detect_status = True
                break
        # 如果检测失败，则直接退出
        if not current_detect_status or current_detect_node is None:
            return False
        if current_detect_node.get('name') == 'end':
            return True
        # 如果检测成功，当前节点不为end则继续执行
        return self.execute_abstract_step(current_detect_node)

    # 执行具体的检测步骤
    @detect_path_trace
    def execute_real_step(self, detect_node: Node) -> bool:
        # 获取开始节点
        impl_r_type = 'impl'
        impl_relationship = self.relationship_matcher.match((detect_node, None), r_type=impl_r_type).first()
        # 如果开始节点为空，则直接返回True
        if impl_relationship is None or impl_relationship.end_node is None:
            return True
        start_node = impl_relationship.end_node
        return self.execute_basic_step(start_node)

    # 执行Action
    def execute_basic_step(self, prev_node: Node) -> bool:
        # 遍历每一条关系
        current_operate_status = False
        current_operate_node = None
        next_r_type = 'next'
        next_nodes = sorted([next_rel.end_node for next_rel in
                             self.relationship_matcher.match((prev_node, None), r_type=next_r_type).all()],
                            key=lambda x: x.get('bias') or 100, reverse=True)
        self.wait_elements(next_nodes)
        for cur_node in next_nodes:
            # 判断是否满足当前关系成立的条件
            execute_operation_status = self.execute_operation(cur_node)
            if execute_operation_status:
                current_operate_node = cur_node
                current_operate_status = True
                break
        # 如果执行失败，则直接退出
        if not current_operate_status or current_operate_node is None:
            return False
        # 如果检测成功，且当前节点为end
        if current_operate_node.get('name') == 'end':
            return True
        # 如果检测成功，当前节点不为end则继续执行
        return self.execute_basic_step(current_operate_node)

    # 循环检查页面是否准备就绪
    def wait_elements(self, next_nodes):
        # 如果当前是start、end，直接返回
        if len(next_nodes) == 1 and next_nodes[0].get('operation') in ['start', 'end']:
            return True
        count = 0
        locate_wallet_element = False
        origin_window_handle = self.driver.current_window_handle

        while count < 20:
            for next_node in next_nodes:
                operation = next_node.get('operation', 'start')
                keywords = next_node.get('keywords', [])
                sort = next_node.get('sort', 'asc')
                tags = next_node.get('tags', [])
                scope = next_node.get('scope', 'web')
                xpath = next_node.get('xpath', None)
                find_elements = False
                switch_another_window, step_info_frame = False, False
                if scope == 'wallet':
                    # 如果没有切换到钱包，则直接进行下一个操作
                    if not self.switch_to_wallet_window_handle():
                        continue
                    switch_another_window = True
                if operation in ['start', 'end']:
                    continue
                if operation in ['exist']:
                    keywords = self.get_exist_keywords(next_node.get('extra_data', 'account'))

                if xpath:
                    try:
                        self.driver.find_element(By.XPATH, xpath)
                        find_elements = True
                    except NoSuchElementException as e:
                        continue
                elif keywords:
                    executable_elements, step_info_frame = self.chrome.get_target_executable_elements(keywords=keywords,
                                                                                                      tags=tags,
                                                                                                      sort=sort)
                    find_elements = len(executable_elements) > 0
                if step_info_frame or switch_another_window:
                    self.chrome.driver.switch_to.window(origin_window_handle)

                if find_elements:
                    return
            time.sleep(1)
            count += 1
        default_wait_time = config['dapp']['wait-time']
        if locate_wallet_element and count < default_wait_time:
            time.sleep(default_wait_time - count)

    def get_exist_keywords(self, extra_data):
        keywords = []
        if extra_data == 'account':
            # 获取钱包账户地址，如果不存在直接返回False，如果存在则截取最后四位
            account = self.driver.execute_script('return window.ethereum.selectedAddress')
            if account is not None:
                keywords += [
                    '...' + account[len(account) - 4:],
                    account[:3] + '...' + account[len(account) - 4:],
                    account[:5],
                ]
        return keywords

    def switch_to_wallet_window_handle(self):
        current_url = self.driver.current_url
        wallet_id = config['chrome']['metamask']['id']
        if wallet_id in current_url:
            return True
        all_window_handles = self.driver.window_handles
        if len(all_window_handles) == 1:
            return False
        self.chrome.driver.switch_to.window(all_window_handles[-1])
        return True

    # 解释执行器
    @detect_path_trace
    def execute_operation(self, node: Node) -> bool:
        # 检测node是否合法
        if 'Action' not in node.labels:
            return False
        if node.get('operation') is None:
            return False
        if node.get('operation') == 'start' or node.get('operation') == 'end':
            return True
        if node.get('scope') is None:
            return False
        if node.get('operation') == 'exist' and (not node.get('keywords') and node.get('data') is None):
            return False
        if node.get('operation') != 'exist' and (node.get('keywords') is None and node.get('xpath') is None):
            return False

        # 如果是exist需要提前从data中取出关键字，然后作为关键字进行查找
        keywords = node.get('keywords', [])
        operation_type = node.get('operation', 'start')
        sort = node.get('sort', 'asc')
        scope = node.get('scope', 'web')

        step_info_frame = False
        switch_another_window = False

        # 如果scope为钱包，判断是否需打开新的window
        origin_window_handle = self.driver.current_window_handle
        all_window_handles = self.driver.window_handles

        if scope == 'wallet':
            if len(all_window_handles) == 1:
                return False
            current_url = self.driver.current_url
            wallet_id = config['chrome']['metamask']['id']
            if wallet_id not in current_url:
                self.chrome.driver.switch_to.window(all_window_handles[-1])
                switch_another_window = True

        # 根据xpath或keywords查找相关元素
        result = False
        executable_elements = []
        if node.get('xpath'):
            executable_elements.append(self.chrome.get_element(By.XPATH, node.get('xpath')))
        elif keywords:
            executable_elements, step_info_frame = self.chrome.get_target_executable_elements(keywords=keywords,
                                                                                              tags=node.get('tags'),
                                                                                              sort=sort)
        # 根据operation类型进行相关处理
        if operation_type == 'exist':
            keywords = self.get_exist_keywords(node.get('extra_data', 'account'))
            result = keywords and self.execute_exist(executable_elements, keywords)
        elif operation_type == 'click':
            result = len(executable_elements) > 0 and self.execute_click(executable_elements, keywords)
        elif operation_type == 'input':
            result = len(executable_elements) > 0 and self.execute_input(executable_elements, keywords)

        if step_info_frame or switch_another_window:
            self.chrome.driver.switch_to.window(origin_window_handle)
        return result

    # 执行点击操作
    def execute_click(self, element_info_list: [{}], keywords: [str]) -> bool:
        # 打乱
        # 执行之前记录页面html
        self.chrome.record_page_html()
        for element_info in element_info_list:
            # 如果使用了 xpath
            if not keywords and isinstance(element_info, WebElement):
                element_info.send_keys(Keys.ENTER)
                return True
            if self.chrome.click_element(executable_element=element_info['element'], xpath=element_info['xpath'],
                                         check_change=True):
                return True
        return False

    # 执行输入操作
    def execute_input(self, element_info_list: [{}], keywords: [str]) -> bool:
        # 执行之前记录页面html
        self.chrome.record_page_html()
        for element_info in element_info_list:
            executable_element = element_info['element']
            if executable_element.tag_name != 'input':
                continue
            try:
                executable_element.send_keys(config['dapp']['input-amount'])
                if self.chrome.is_page_change:
                    return True
            except Exception as e:
                if config['debug']['display-exception']:
                    print(e)
        return False

    # 执行判断存在操作
    def execute_exist(self, element_info_list: [{}], keywords: [str]) -> bool:
        if element_info_list is not None:
            for element_info in element_info_list:
                if element_info['text_similarity'] == 1:
                    return True
        html = self.chrome.html
        for keyword in keywords:
            if keyword in html:
                return True
        return False
