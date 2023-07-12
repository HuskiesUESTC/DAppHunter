import time
from typing import Any

from selenium.common.exceptions import NoSuchElementException, JavascriptException
from selenium.webdriver.common.by import By

from py2neo import Graph, NodeMatcher, RelationshipMatcher, Node

from util.configuration import config
from util.utils import detect_path_trace
from util.browser import Chrome
from util.environment import env, EnvKey


class Parser:

    def __init__(self, chrome: Chrome):
        self.driver = chrome.driver
        self.chrome = chrome
        graph = Graph(config['neo4j']['host'],
                      auth=(config['neo4j']['username'], config['neo4j']['password']),
                      name=config['neo4j']['name'])
        self.node_matcher = NodeMatcher(graph)
        self.relationship_matcher = RelationshipMatcher(graph)
        self.display_element_xpath = config['debug']['display-element-xpath']

    # 执行抽象的检测过程
    def handle(self) -> bool:
        window_handles = self.driver.window_handles
        if len(window_handles) > 1:
            self.driver.switch_to.window(window_handles[0])
        # 获取开始节点
        start_node = self.node_matcher.match('Intention', name='start').first()
        return self.execute_abstract_step(start_node)

    def execute_abstract_step(self, prev_node: Node) -> bool:
        # 遍历每一条关系
        r_type = 'next'
        next_intention_nodes = sorted([next_rel.end_node for next_rel in
                                       self.relationship_matcher.match((prev_node, None), r_type=r_type).all()],
                                      key=lambda x: x.get('bias') or 100, reverse=True)
        # 如果下一步意图只有一个节点，并且节点为end，则直接返回True
        if len(next_intention_nodes) == 1 and next_intention_nodes[0].get('name') == 'end':
            return True

        def get_start_action_node(intention_node):
            impl_r_type = 'impl'
            impl_relationship = self.relationship_matcher.match((intention_node, None), r_type=impl_r_type).first()
            # 如果开始节点为空，则直接返回True
            if impl_relationship is None or impl_relationship.end_node is None:
                return True
            return impl_relationship.end_node

        def get_first_action_nodes(intention_node):
            # 获取start节点
            start_node = get_start_action_node(intention_node)
            # 获取与start相连的所有节点
            return sorted([next_rel.end_node for next_rel in
                           self.relationship_matcher.match((start_node, None), r_type='next').all()],
                          key=lambda x: x.get('bias') or 100, reverse=True)

        # 获取下一步意图节点与第一步实际操作之间的映射
        action_intention_map = {}
        for cur_intention_node in next_intention_nodes:
            for concrete_action_node in get_first_action_nodes(cur_intention_node):
                action_intention_map[concrete_action_node] = cur_intention_node
        print("list is :", list(action_intention_map.keys()))
        # 获取下一步可执行操作
        current_operate_node = self.wait_elements(list(action_intention_map.keys()))
        print("current operation is ", current_operate_node)
        if not current_operate_node:
            return False
        # 获取下一步意图节点
        current_detect_node = action_intention_map[current_operate_node]
        # 执行下一步意图
        execute_real_step_result = self.execute_real_step(current_detect_node)
        if not execute_real_step_result:
            return False
        # 记录意图路径
        intention_path = env.get(EnvKey.INTENTION_PATH, [])
        intention_path.append(current_detect_node.get('name'))
        env.set(EnvKey.INTENTION_PATH, intention_path)
        # 继续执行
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
        next_r_type = 'next'
        next_nodes = sorted([next_rel.end_node for next_rel in
                             self.relationship_matcher.match((prev_node, None), r_type=next_r_type).all()],
                            key=lambda x: x.get('bias') or 100, reverse=True)
        print("list is ", next_nodes)
        current_operate_node = self.wait_elements(next_nodes)
        # 如果下一步没有可执行节点，获取执行结果为False，直接返回False
        if not current_operate_node or not self.execute_operation(current_operate_node):
            return False
        # 如果检测成功，且当前节点为end
        if current_operate_node.get('name') == 'end':
            return True
        # 如果检测成功，当前节点不为end则继续执行
        return self.execute_basic_step(current_operate_node)

    # 循环检查页面是否准备就绪
    def wait_elements(self, next_nodes: [Node]) -> Any | None:
        # 如果当前是start、end，直接返回
        if len(next_nodes) == 1 and next_nodes[0].get('operation') in ['start', 'end']:
            return next_nodes[0]
        count = 0

        origin_window_handle = self.driver.current_window_handle
        max_wait_time = config['dapp']['wait-time']
        for next_node in next_nodes:
            max_wait_time = max(next_node.get('wait-time', max_wait_time), max_wait_time)

        while count < max_wait_time:
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
                    key = next_node.get('extra_data', 'account')
                    if key == 'account':
                        account = self.driver.execute_script('return window.ethereum.selectedAddress')
                        if account:
                            return next_node
                        continue

                if xpath:
                    try:
                        self.driver.find_element(By.XPATH, xpath)
                        find_elements = True
                    except NoSuchElementException:
                        continue
                elif keywords:
                    executable_elements, step_info_frame = self.chrome.get_target_executable_elements_by_keywords(
                        keywords=keywords,
                        tags=tags,
                        sort=sort)
                    find_elements = len(executable_elements) > 0
                if step_info_frame or switch_another_window:
                    self.chrome.driver.switch_to.window(origin_window_handle)

                if find_elements:
                    return next_node
            time.sleep(1)
            count += 1

        return None

    def get_exist_keywords(self, extra_data):
        keywords = []
        if extra_data == 'account':
            # 获取钱包账户地址，如果不存在直接返回False，如果存在则截取最后四位
            try:
                account = self.driver.execute_script('return window.ethereum.selectedAddress')
                if account is not None:
                    keywords += [
                        'web3-status-connected',
                        '...' + account[len(account) - 4:],
                        account[:3] + '...' + account[len(account) - 4:],
                        account[:5],
                    ]
            except JavascriptException:
                pass
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

        # 如果是exist需要提前从data中取出关键字，然后作为关键字进行查找
        operation = node.get('operation', 'start')
        sort = node.get('sort', 'asc')
        scope = node.get('scope', 'web')
        xpath = node.get('xpath', None)
        tags = node.get('tags', None)
        keywords = node.get('keywords', None)
        key = node.get('key', None)

        if operation in ['start', 'end']:
            return True
        if operation in ['exist'] and (not keywords and not node.get('data', None)):
            return False
        if operation not in ['exist'] and (not keywords and not xpath):
            return False
        if operation in ['record'] and (not key):
            return False

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

        if xpath:
            executable_elements, step_info_frame = self.chrome.get_target_executable_elements_by_xpath(xpath)
        elif keywords:
            executable_elements, step_info_frame = self.chrome.get_target_executable_elements_by_keywords(keywords,
                                                                                                          tags,
                                                                                                          sort)
        # 根据operation类型进行相关处理
        if operation == 'exist':
            key = node.get('extra_data', 'account')
            if key == 'account':
                account = self.driver.execute_script('return window.ethereum.selectedAddress')
                result = account is not None
            else:
                keywords = self.get_exist_keywords(node.get('extra_data', 'account'))
                result = keywords and self.execute_exist(keywords, node)
        elif operation == 'click':
            result = len(executable_elements) > 0 and self.execute_click(executable_elements, node)
        elif operation == 'input':
            result = len(executable_elements) > 0 and self.execute_input(executable_elements, node)
        elif operation == 'record':
            result = len(executable_elements) > 0 and self.execute_record(executable_elements, node)
        if step_info_frame or switch_another_window:
            self.chrome.driver.switch_to.window(origin_window_handle)
        return result

    # 执行点击操作
    def execute_click(self, element_info_list: [{}], node: Node) -> bool:
        # 执行之前记录页面html
        self.chrome.record_page_html()
        # 记录窗口数量
        self.chrome.record_window_handles()

        def find_suitable_element(cur_executable_element, cur_xpath):
            if cur_xpath.endswith('/button') or '/button/' not in cur_xpath:
                return cur_executable_element, cur_xpath
            suit_xpath = cur_xpath.split('/button/')[0] + '/button'
            suit_element = self.chrome.get_element(By.XPATH, suit_xpath)
            return suit_element, suit_xpath

        for element_info in element_info_list:
            # 向上寻找合适的元素
            element, xpath = find_suitable_element(element_info['web_element'], element_info['xpath'])
            self.display_element_xpath and print(xpath)
            if self.chrome.click_element(executable_element=element,
                                         xpath=xpath,
                                         check_change=True):
                return True
        return False

    # 执行输入操作
    def execute_input(self, element_info_list: [{}], node: Node) -> bool:
        # 执行之前记录页面html
        self.chrome.record_page_html()
        for element_info in element_info_list:
            self.display_element_xpath and print(element_info['xpath'])
            if self.chrome.input_element(executable_element=element_info['web_element'],
                                         xpath=element_info['xpath'],
                                         input_value=config['dapp']['input-amount'],
                                         check_change=True):
                return True
        return False

    # 执行记录操作
    def execute_record(self, element_info_list: [{}], node: Node) -> bool:
        key, result = node.get('key'), []
        for element_info in element_info_list:
            html_element, executable_element = element_info['html_element'], element_info['web_element']
            if html_element.tag in ['input']:
                wait_time = node.get('wait-time', config['dapp']['wait-time'])
                retry_count = 0
                value = None
                disabled = executable_element.get_attribute('disabled')
                if disabled:
                    placeholder = executable_element.get_attribute('placeholder')
                    if placeholder:
                        value = placeholder
                while retry_count < wait_time and not value:
                    value = executable_element.get_attribute('value')
                    if not value or value in ['0', '0.0']:
                        executable_element = self.driver.find_element(By.XPATH, element_info['xpath'])
                        value = None
                        time.sleep(1)
                        retry_count += 1
                result.append(value)
            else:
                result += list(html_element.itertext())
        page_state = env.get(EnvKey.PAGE_STATE, {})
        stripped = []
        for r in result:
            if r.strip():
                stripped.append(r.strip())
        page_state[key] = stripped
        env.set(EnvKey.PAGE_STATE, page_state)
        return True

    # 执行判断存在操作
    def execute_exist(self, keywords: [str], node: Node) -> bool:
        html = self.chrome.html.lower()
        for keyword in keywords:
            if keyword.lower() in html:
                return True
        return False
