import time
from util.chrome import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from util.utils import detect_path_trace, ocr
import random
from util.config import config
from py2neo import Graph, NodeMatcher, RelationshipMatcher, Node


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
        r_type = 'next'

        def execute_abstract_step(prev_node: Node) -> bool:
            # 遍历每一条关系
            current_detect_status = False
            current_detect_node = None
            for cur_rel in self.relationship_matcher.match((prev_node, None), r_type=r_type).all():
                # 判断是否满足当前关系成立的条件
                cur_node = cur_rel.end_node
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
            return execute_abstract_step(current_detect_node)

        return execute_abstract_step(start_node)

    # 执行具体的检测步骤
    @detect_path_trace
    def execute_real_step(self, detect_node: Node) -> bool:
        # 获取开始节点
        impl_r_type = 'impl'
        next_r_type = 'next'
        impl_relationship = self.relationship_matcher.match((detect_node, None), r_type=impl_r_type).first()
        # 如果开始节点为空，则直接返回True
        if impl_relationship is None or impl_relationship.end_node is None:
            return True
        start_node = impl_relationship.end_node

        def execute_basic_step(prev_node: Node) -> bool:
            # 遍历每一条关系
            current_operate_status = False
            current_operate_node = None
            for cur_rel in self.relationship_matcher.match((prev_node, None), r_type=next_r_type).all():
                # 判断是否满足当前关系成立的条件
                cur_node = cur_rel.end_node
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
            # 方法执行成功后，如果是普通操作，且不是start、end，需要等待0.5s
            time.sleep(7)
            # 如果检测成功，当前节点不为end则继续执行
            return execute_basic_step(current_operate_node)

        return execute_basic_step(start_node)

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
        if node.get('operation') == 'exist' and (node.get('keywords') is None and node.get('data') is None):
            return False
        if node.get('operation') != 'exist' and (node.get('keywords') is None and node.get('xpath') is None):
            return False

        # 如果scope为钱包，判断是否需打开新的window
        origin_window_handle = None
        if node.get('scope') == "wallet":
            current_url = self.driver.current_url
            wallet_id = config['chrome']['metamask']['id']
            wallet_page_url = 'chrome-extension://{}/home.html'.format(wallet_id)
            if wallet_id not in current_url:
                origin_window_handle = self.chrome.driver.current_window_handle
                self.chrome.driver.switch_to.new_window(wallet_page_url)

        # 如果是exist需要提前从data中取出关键字，然后作为关键字进行查找
        keywords = node.get('keywords')
        filters = node.get('filters', [])
        operation_type = node.get("operation")
        if operation_type == 'exist' and node.get('data') is not None:
            extra_data = node.get('data')
            # 如果是account，且data为account
            if node.get('scope') == 'web' and extra_data == 'account':
                # 获取钱包账户地址，如果不存在直接返回False，如果存在则截取最后四位
                account = self.driver.execute_script('return window.ethereum.selectedAddress')
                if account is None:
                    return False
                keywords = ['...' + account[len(account) - 4:]]
            # 其他情况暂时忽略
            else:
                return True

        # 根据xpath或keywords查找相关元素
        result = False
        step_info_iframe = False
        executable_elements = []
        if node.get('xpath') is not None:
            executable_elements.append(self.chrome.get_element(By.XPATH, node.get('xpath')))
        elif keywords is not None:
            executable_elements, step_info_iframe = self.chrome.get_target_executable_elements(keywords=keywords,
                                                                                               filters=filters,
                                                                                               tags=node.get('tags'))
        # 根据operation类型进行相关处理
        if len(executable_elements) > 0:
            if operation_type == 'click':
                result = self.execute_click(executable_elements, keywords)
            elif operation_type == 'input':
                result = self.execute_input(executable_elements, keywords)
            elif operation_type == 'select':
                result = self.execute_select(executable_elements, keywords)
            elif operation_type == 'exist':
                result = self.execute_exist(executable_elements, keywords)

        # 切换至原有窗口
        if step_info_iframe:
            self.driver.switch_to.default_content()
        if origin_window_handle is not None:
            self.driver.switch_to.window(origin_window_handle)
        return result

    # 执行点击操作
    def execute_click(self, elements: [WebElement, str], keywords: [str]) -> bool:
        # 打乱
        random.shuffle(elements)
        screen_base64 = self.chrome.driver.get_screenshot_as_base64()
        displayed_words = ocr(screen_base64)

        # 首先从ocr中找到相关元素
        for displayed_word in displayed_words:
            location = displayed_words[displayed_word]
            displayed_word = displayed_word.replace(' ', '-').lower()
            if displayed_word in keywords:
                if self.chrome.click_element_by_location(location=location, check_change=True):
                    return True
        # 执行之前记录页面html
        self.chrome.store_page_html()
        for element, xpath in elements:
            if self.chrome.click_element(element=element, xpath=xpath, check_change=True):
                return True
        return False

    # 执行输入操作
    def execute_input(self, elements: [WebElement, str], keywords: [str]) -> bool:
        # 执行之前记录页面html
        self.chrome.store_page_html()
        amount = 0.01
        for element, xpath in elements:
            if element.tag_name != 'input':
                continue
            try:
                element.send_keys(amount)
                if self.chrome.check_page_change():
                    return True
            except Exception as e:
                if config['debug']['display-exception']:
                    print(e)
        return False

    # 执行选择操作
    def execute_select(self, elements: [WebElement, str], keywords: [str]) -> bool:
        return True

    # 执行判断存在操作
    def execute_exist(self, elements: [WebElement, str], keywords: [str]) -> bool:
        if elements is not None:
            for element, _ in elements:
                for keyword in keywords:
                    if keyword in element.text.strip().lower():
                        return True
        return False
