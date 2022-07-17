from io import StringIO
import lxml.etree
from lxml.html import HtmlElement
from selenium.webdriver.chrome import webdriver
from selenium import webdriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from util.config import config
from util import locator


class Chrome:

    def __init__(self):
        self._url = None
        self._recent_page_html = None
        # 配置selenium自动化测试框架
        options = webdriver.ChromeOptions()
        options.add_argument('--user-data-dir=' + config['chrome']['profile']['dir'])
        self._driver = webdriver.Chrome(options=options, executable_path=config['chrome']['webdriver'])

    # 获取元素
    def get_element(self, by=By.ID, value=None) -> WebElement:
        return WebDriverWait(self.driver, config['chrome']['wait-time']).until(
            ec.presence_of_element_located(
                (by, value)))

    # 获取元素xpath
    def get_html_element_xpath(self, html_element: HtmlElement) -> str:
        return html_element.getroottree().getpath(html_element)

    # 获取可执行元素
    def get_executable_element(self, html_element: HtmlElement) -> (WebElement, str):
        xpath = self.get_html_element_xpath(html_element)
        return self.get_element(By.XPATH, xpath), xpath

    # 获取指定的html元素
    def get_target_html_elements(self, keywords: [str], tags: [str], context: str = 'text') -> [{}]:
        root = self.dom
        locator.CONTEXT = context
        result = locator.recommend_elements(root, tags, keywords)
        # 返回 text相似度在0.8以上，综合相似度在0.7以上的元素
        return list(filter(lambda x: x['text_similarity'] > 0.8 and x['similarity'] > 0.7, result))

    # 获取指定的可执行元素
    def get_target_executable_elements(self, keywords: [str], tags: [str], context: str = 'text') -> [{}]:
        def _get_current_page_target_executable_elements():
            result = self.get_target_html_elements(keywords, tags, context)

            def __convert_element(item):
                item['element'], item['xpath'] = self.get_executable_element(item['element'])
                return item

            return list(map(lambda x: __convert_element(x), result))

        step_into_iframe = False
        iframe_cnt = len(self._driver.find_elements(By.TAG_NAME, 'iframe'))
        while True:
            result = _get_current_page_target_executable_elements()
            if result or iframe_cnt == 0:
                break
            self.driver.switch_to.frame(--iframe_cnt)
            step_into_iframe = True
        if step_into_iframe:
            self.driver.switch_to.default_content()
        return result

    # 点击元素
    def click_element(self, executable_element: WebElement, xpath: str, check_change: False, ancestor_level: int = 0):
        if config['debug']['display-click-element-xpath']:
            print(xpath)

        def _check_click(func):
            def __execute(*args, **kwargs):
                try:
                    func(*args, **kwargs)
                    return self.is_page_change
                except Exception as e:
                    if config['debug']['display-exception']:
                        print(e)
                    return False

            return __execute

        @_check_click
        def click_direct():
            executable_element.click()

        @_check_click
        def click_by_send_keys():
            executable_element.send_keys(Keys.ENTER)

        @_check_click
        def click_by_pos():
            (x, y) = executable_element.location.get('x'), executable_element.location.get('y')
            ActionChains(self.driver).move_by_offset(x, y).click().perform()

        if click_direct() or click_by_send_keys() or click_by_pos():
            return True

        if check_change:
            # 如果当前页面发生了变化则跳转
            if self.is_page_change:
                return True
            # 向上进行递归
            if ancestor_level == 3:
                return False
            parent_xpath = xpath[0: xpath.rindex('/')]
            parent_element = self.get_element(By.XPATH, parent_xpath)
            return self.click_element(parent_element, parent_xpath, check_change, ancestor_level + 1)
        return True

        # 为 metamask 钱包插件解锁

    def unlock_metamask(self) -> None:
        id = config['chrome']['metamask']['id']
        password = config['chrome']['metamask']['password']
        unlock_url = 'chrome-extension://' + id + '/home.html#unlock'
        # 显示等待
        self.url = unlock_url
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
                specific_network_elements, _ = self.get_target_executable_elements(keywords=[network_type],
                                                                                   tags=['span'])
                # 如果存在该元素，则执行找到的第一个
                if len(specific_network_elements) > 0:
                    specific_network_ele, xpath = specific_network_elements[0]
                    specific_network_ele.click()
                    result = True
                break
        # 执行完成之后，如果与origin页面不同，则关闭该页面并返回
        if origin_window_handle is not None:
            self.driver.close()
            self.driver.switch_to.window(origin_window_handle)
        return result

    @property
    def url(self):
        return self._url

    @property
    def driver(self):
        return self._driver

    @property
    def dom(self):
        parser = lxml.etree.HTMLParser()
        tree = lxml.etree.parse(StringIO(self.html), parser)
        return tree.getroot()

    def record_page_html(self):
        self._recent_page_html = self.html

    @property
    def is_page_change(self):
        return self.html != self._recent_page_html

    @property
    def html(self):
        return self.driver.execute_script("return document.documentElement.outerHTML")

    @url.setter
    def url(self, url: str):
        self._url = url
        self._driver.get(url)
