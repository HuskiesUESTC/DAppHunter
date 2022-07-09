from selenium.webdriver.chrome import webdriver
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import lxml.etree
from lxml.etree import ElementTree
from lxml.html import HtmlElement
from io import StringIO
# 浏览器自动化测试工具类
from exception import CustomError
from util.config import config


class Chrome:

    def __init__(self):
        self.url = None
        self.recent_page_html = None
        # 配置 selenium 自动化测试框架
        options = webdriver.ChromeOptions()
        options.add_argument("--user-data-dir=" + config['chrome']['profile']['dir'])
        self.driver = webdriver.Chrome(options=options, executable_path=config['chrome']['webdriver'])

    # 设置当前页面的url
    def set_url(self, url) -> None:
        self.url = url
        self.driver.get(url)

    # 获取当前页面dom树的根节点
    def get_dom_tree(self) -> ElementTree:
        parser = lxml.etree.HTMLParser()
        html = self.driver.execute_script("return document.documentElement.outerHTML")
        tree = lxml.etree.parse(StringIO(html), parser)
        return tree.getroot()

    # 显示等待获取元素
    def get_element(self, by=By.ID, value=None) -> WebElement:
        return WebDriverWait(self.driver, config['chrome']['wait-time']).until(
            ec.presence_of_element_located(
                (by, value)))

    # 获取可执行元素
    def get_executable_element(self, element: HtmlElement) -> (WebElement, str):
        xpath = element.getroottree().getpath(element)
        skip_path = ['image', 'svg']
        for skip_item in skip_path:
            if skip_item in xpath:
                return None, xpath
        executable_element = self.driver.find_element(By.XPATH, xpath)
        return executable_element, xpath

    # 为 metamask 钱包插件解锁
    def unlock_metamask(self) -> None:
        id = config['chrome']['metamask']['id']
        password = config['chrome']['metamask']['password']
        unlock_url = 'chrome-extension://' + id + '/home.html#unlock'
        # 显示等待
        self.driver.get(unlock_url)
        # 输入密码 input
        password_input = self.get_element(By.XPATH, '/html/body/div[1]/div/div[3]/div/div/form/div/div/input')
        password_input.send_keys(password)
        # 提交按钮 button
        submit_button = self.get_element(By.XPATH, '/html/body/div[1]/div/div[3]/div/div/button')
        submit_button.send_keys(Keys.ENTER)

    # 切换 metamask 网络
    def switch_metamask_network(self, network_type: str) -> bool:
        id = config['chrome']['metamask']['id']
        home_page = 'chrome-extension://' + id + '/home.html'
        origin_window_handle = None
        # 如果当前不是配置页面，则新建标签页
        if home_page not in self.driver.current_url:
            origin_window_handle = self.driver.current_window_handle
            self.driver.switch_to.new_window()
            self.driver.get(home_page)
        # 点击下拉框
        select_network_button = self.get_element(By.XPATH, "/html/body/div[1]/div/div[1]/div/div[2]/div[1]/div")
        select_network_button.send_keys(Keys.ENTER)
        # 查找相关的列表元素
        accessible_network = self.get_element(By.XPATH, "/html/body/div[1]/div/div[2]/div/div[2]").text.split("\n")
        # 如果切换网络类型在列表中存在，则进行切换
        result = False
        for accessible_type in accessible_network:
            if network_type.strip().lower() is accessible_type.strip().lower():
                specific_network_eles, _ = self.get_target_executable_elements(keywords=[network_type], tags=['span'])
                # 如果存在该元素，则执行找到的第一个
                if len(specific_network_eles) > 0:
                    specific_network_ele, xpath = specific_network_eles[0]
                    specific_network_ele.click()
                    result = True
                break
        # 执行完成之后，如果与origin页面不同，则关闭该页面并返回
        if origin_window_handle is not None:
            self.driver.close()
            self.driver.switch_to.window(origin_window_handle)
        return result

    # 获取特定的html元素
    def get_target_html_elements(self, keywords: [str], filters: [str], tags: [str] = None) -> [HtmlElement]:

        # 检查字符串是否存在于字典中
        def _if_exists_in_list(item: str, words: [str]):
            if str is None:
                return False
            item = item.strip().lower()
            for keyword in words:
                if keyword.lower() in item:
                    return True
            return False

        # 检查标签的每一个属性
        def _check_element_attribute(element: HtmlElement) -> bool:
            # 如果标签的tag中存在关键字
            has_keyword = False
            if element.text is not None and _if_exists_in_list(element.text, keywords) and not _if_exists_in_list(element.text, filters):
                has_keyword = True
            # 如果标签的attribute中存在关键字
            if not has_keyword:
                for (attr_name, attr_value) in element.attrib.items():
                    if _if_exists_in_list(attr_value, keywords):
                        has_keyword = True
                        break
            # 如果标签中存在过滤词
            if has_keyword:
                for (attr_name, attr_value) in element.attrib.items():
                    if _if_exists_in_list(attr_value, filters):
                        has_keyword = False
                        break
            # 判断标签类型是否符号要求
            if has_keyword and (tags is None or len(tags) == 0 or element.tag in tags):
                return True
            return False

        result = []

        # 递归查找每一个元素
        def _check_element(element: HtmlElement, level: int = 0):
            # 如果是debugger模式
            if config['debug']['display-dom-tree']:
                print(' ' * level, element.tag)
            # 如果标签为iframe，则添加进数组
            if _check_element_attribute(element):
                if element.tag != 'img':
                    result.append(element)
            else:
                for ele in element.getchildren():
                    _check_element(ele, level + 1)

        _check_element(self.get_dom_tree())
        return result

    # 获取特定的可执行元素
    def get_target_executable_elements(self, keywords: [str], filters: [str] = [], tags: [str] = None) -> ([WebElement, str], bool):
        result = []
        for html_element in self.get_target_html_elements(keywords=keywords, filters=filters, tags=tags):
            executable_element, xpath = self.get_executable_element(html_element)
            if executable_element is not None and executable_element.is_enabled() and executable_element.is_displayed():
                result.append((executable_element, xpath))
        # 如果result为空，则从frame中读取
        step_into_iframe = False
        if len(result) == 0:
            iframe_elements = self.driver.find_elements(By.TAG_NAME, 'iframe')
            for i in range(len(iframe_elements)):
                self.driver.switch_to.frame(i)
                step_into_iframe = True
                result = self.get_target_html_elements(keywords=keywords, filters=filters, tags=tags)
                if len(result) > 0:
                    break
        # 切换回主页面
        if len(result) == 0 and step_into_iframe:
            self.driver.switch_to.default_content()
            step_into_iframe = False
        return result, step_into_iframe

    # 切换页面
    def switch_tab(self, tab: str = None):
        # 如果tab为空，则切换回url
        handlers = self.driver.window_handles
        if tab is None or len(handlers) == 1:
            self.driver.switch_to.window(handlers[0])
            return
        # 如果tab不为空，则切换至相应的页面
        for handler in handlers:
            self.driver.switch_to.window(handler)
            current_url = self.driver.current_url
            if tab in current_url:
                return
        raise CustomError("标签页---" + tab + "不存在")

    # 存储页面hash
    def store_page_html(self):
        self.recent_page_html = self.get_page_html()

    # 计算当前页面hash
    def get_page_html(self):
        return self.driver.execute_script("return document.documentElement.outerHTML")

    # 检测页面是否发生变化
    def check_page_change(self) -> bool:
        current_page_hash = self.get_page_html()
        return current_page_hash != self.recent_page_html

    # 点击元素
    def click_element(self, element: WebElement, xpath: str, check_change: False, ancestor_level: int = 0):

        if config['debug']['display-click-element-xpath']:
            print(xpath)

        def check_click(func):
            def execute(*args, **kwargs):
                try:
                    func(*args, **kwargs)
                    return self.check_page_change()
                except Exception as e:
                    if config['debug']['display-exception']:
                        print(e)
                    return False

            return execute

        # 根据坐标进行点击
        @check_click
        def click_direct():
            element.click()

        @check_click
        def click_by_send_keys():
            element.send_keys(Keys.ENTER)

        @check_click
        def click_by_pos():
            (x, y) = element.location.get("x"), element.location.get('y')
            ActionChains(self.driver).move_by_offset(x, y).click().perform()

        if click_direct():
            return True
        if click_by_send_keys():
            return True
        if click_by_pos():
            return True

        if check_change:
            # 如果当前页面发生了变化则跳转
            if self.check_page_change():
                return True
            # 向上进行递归
            if ancestor_level == 3:
                return False
            parent_xpath = xpath[0:xpath.rindex('/')]
            parent_element = self.get_element(By.XPATH, parent_xpath)
            return self.click_element(parent_element, parent_xpath, check_change, ancestor_level + 1)
        return True

    def click_element_by_location(self, location: [[int]], check_change: False):
        top_left, top_right, bottom_right, bottom_left = location
        x, y = [(top_left[0] + bottom_right[0]) / 2, (top_left[1] + bottom_right[1]) / 2]
        ActionChains(self.driver).move_by_offset(x, y).click().perform()
        if check_change:
            return self.check_page_change()
        return True
