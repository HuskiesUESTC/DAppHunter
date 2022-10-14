import functools
import time
from io import StringIO

from lxml import etree
from lxml.html import HtmlElement

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import ElementNotInteractableException, ElementClickInterceptedException, \
    UnexpectedAlertPresentException, JavascriptException, StaleElementReferenceException
from selenium.webdriver.remote.webelement import WebElement

from util import locator, ocr
from util.configuration import config


class Chrome:

    def __init__(self):
        self._url = None
        self._recent_page_html = None
        self._recent_window_handles = None
        # 配置selenium自动化测试框架
        options = webdriver.ChromeOptions()
        options.add_argument('--user-data-dir=' + config['chrome']['profile']['dir'])
        self._driver = webdriver.Chrome(options=options, executable_path=config['chrome']['webdriver'])
        # 配置项
        self.display_exception = config['debug']['display-exception']

    # 获取元素
    def get_element(self, by=By.ID, value=None) -> WebElement:
        return WebDriverWait(self.driver, config['chrome']['wait-time']).until(
            ec.presence_of_element_located(
                (by, value)))

    # 获取元素xpath
    def get_html_element_xpath(self, html_element: HtmlElement) -> str:
        return html_element.getroottree().getpath(html_element)

    # 获取可执行元素
    def get_executable_element(self, xpath: str) -> (WebElement, str):
        return self.get_element(By.XPATH, xpath)

    # 获取指定的html元素
    def get_target_html_elements(self, keywords: [str], tags: [str], sort: str = "asc") -> [{}]:
        reverse = (sort == 'desc')
        result = []
        retry_count = 0
        max_count = 3
        while retry_count < max_count and not result:
            result = self.recommend_elements(tags, keywords, reverse)
            if not result:
                retry_count += 1
        # 返回 text相似度在0.8以上，综合相似度在0.7以上的元素
        return list(filter(lambda x: x['text_similarity'] > 0.8 and x['similarity'] > 0.7, result))

    # 综合单词相似度与属性相似度推荐元素
    def recommend_elements(self, tags: [str] = None, keywords: [str] = None,
                           reverse: bool = False) -> [{}]:
        # 提取词干
        keyword_stem_word_list = []
        for keyword in keywords:
            keyword_stem_word_list.append(locator.extract_stem_words(keyword))
        # 寻找合适的元素，并计算text相似度
        suitable_elements = locator.find_suitable_elements(root=self.dom,
                                                           xpath_fetch_func=self.get_html_element_xpath,
                                                           keyword_stem_word_list=keyword_stem_word_list,
                                                           tags=tags,
                                                           context='text')
        if not suitable_elements:
            suitable_elements = locator.find_suitable_elements(root=self.dom,
                                                               xpath_fetch_func=self.get_html_element_xpath,
                                                               keyword_stem_word_list=keyword_stem_word_list,
                                                               tags=tags,
                                                               context='attr')
        # 计算元素的attr-key，并计算attr相似度
        attr_key_map = {}
        attr_cnt = len(suitable_elements)
        for element in suitable_elements:
            attr_key = element['attr_key']
            attr_key_map[attr_key] = 1 if attr_key not in attr_key_map else attr_key_map[attr_key] + 1

        # 计算元素的相似度
        def change_similarity(item):
            text_similarity = item['text_similarity']
            attr_similarity = locator.calculate_attr_similarity(attr_key_map[item['attr_key']], attr_cnt)
            item['attr_similarity'] = attr_similarity
            item['similarity'] = locator.calculate_score(text_similarity, attr_similarity)
            return item

        # 按照相似度进行排序，同时相同分数增加顺序约束
        def sort(item1, item2):
            text_similarity_offset = item1['similarity'] - item2['similarity']
            if text_similarity_offset != 0:
                return 1 if text_similarity_offset > 0 else -1
            attr_similarity_offset = item1['attr_similarity'] - item2['attr_similarity']
            if abs(attr_similarity_offset) > 0.3:
                return 1 if attr_similarity_offset > 0 else -1
            if reverse:
                return -1
            return 1

        # 按照相似度进行排序并返回
        return sorted([change_similarity(item) for item in suitable_elements],
                      key=functools.cmp_to_key(sort),
                      reverse=reverse)

    # 获取指定xpath的可执行元素
    def get_target_executable_elements_by_xpath(self, xpath: str) -> ([{}], bool):
        element = self.get_element(By.XPATH, xpath)
        item = {
            'web_element': element,
            'xpath': xpath
        }
        return [item], False

    # 获取指定keywords的可执行元素
    def get_target_executable_elements_by_keywords(self, keywords: [str], tags: [str], sort: str = 'asc') -> (
            [{}], bool):
        def _get_current_page_target_executable_elements():
            def __convert_element(item):
                item['web_element'] = self.get_executable_element(item['xpath'])
                return item

            html_result = self.get_target_html_elements(keywords, tags, sort=sort)
            return list(map(lambda x: __convert_element(x), html_result))

        result = _get_current_page_target_executable_elements()
        step_info_iframe = False
        # # 如果没有定位到该元素，并且页面存在iframe
        # iframe_cnt = len(self._driver.find_elements(By.TAG_NAME, 'iframe'))
        # if not result and iframe_cnt > 0:
        #     # 通过ocr扫描页面
        #     words_info = self.page_state
        #     # 计算words、keywords的stem_word
        #     text_stem_words_list = list(map(lambda item: locator.extract_stem_words(item['word']), words_info))
        #     keyword_stem_words_list = list(map(lambda item: locator.extract_stem_words(item), keywords))
        #     # 逐一判断是否存在文本相似度为100%的词
        #     max_similarity = 0
        #     for text_stem_words in text_stem_words_list:
        #         for keyword_stem_words in keyword_stem_words_list:
        #             max_similarity = max(locator.calculate_text_similarity(text_stem_words, keyword_stem_words),
        #                                  max_similarity)
        #             if max_similarity == 1:
        #                 break
        #         if max_similarity == 1:
        #             break
        #     # 判断是否需要进入iframe
        #     need_step_into_iframe = max_similarity == 1
        #     if need_step_into_iframe:
        #         cur_iframe_cnt = 0
        #         while cur_iframe_cnt < iframe_cnt:
        #             self.driver.switch_to.frame(cur_iframe_cnt)
        #             result = _get_current_page_target_executable_elements()
        #             cur_iframe_cnt += 1
        #             if result:
        #                 step_info_iframe = True
        #                 break
        return result, step_info_iframe

    # 点击元素
    def click_element(self, executable_element: WebElement, xpath: str, check_change: False, ancestor_level: int = 0):
        def _check_click(func):
            def __execute(*args, **kwargs):
                func(*args, **kwargs)
                return self.is_page_change

            return __execute

        @_check_click
        def click_direct():
            executable_element.click()

        @_check_click
        def click_by_send_keys():
            executable_element.send_keys(Keys.ENTER)

        # @_check_click
        # def click_by_pos():
        #     (x, y) = executable_element.location.get('x'), executable_element.location.get('y')
        #     ActionChains(self.driver).move_by_offset(x, y).click().perform()

        max_retry = 4
        retry_count = 0
        while retry_count < max_retry:
            retry_count += 1
            click_operations = [click_direct, click_by_send_keys]
            for click_operation in click_operations:
                try:
                    click_operation()
                    if not check_change or self.is_page_change:
                        return True
                except ElementNotInteractableException or UnexpectedAlertPresentException as e:
                    self.display_exception and retry_count == max_retry and print(e)
                except ElementClickInterceptedException or StaleElementReferenceException as e:
                    self.display_exception and print(e)
                    return False
            time.sleep(retry_count + 1)

        # 向上进行递归
        if ancestor_level == 3:
            return False
        parent_xpath = xpath[0: xpath.rindex('/')]
        parent_element = self.get_element(By.XPATH, parent_xpath)
        return self.click_element(parent_element, parent_xpath, check_change, ancestor_level + 1)

    # 输入元素
    def input_element(self, executable_element: WebElement, xpath: str, input_value: str, check_change: False):
        if not xpath.lower().endswith('input'):
            return False
        max_retry = 4
        retry_count = 0
        while retry_count < max_retry:
            retry_count += 1
            try:
                executable_element.send_keys(input_value)
                if not check_change or self.is_page_change:
                    return True
            except ElementNotInteractableException as e:
                self.display_exception and retry_count == max_retry and print(e)
            time.sleep(retry_count + 1)
        return False

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
        time.sleep(5)

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
                specific_network_elements, _ = self.get_target_executable_elements_by_keywords(keywords=[network_type],
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
    def page_state(self):
        return ocr.recognize_image(ocr.IMAGE_ENCODE, self.driver.get_screenshot_as_base64())

    @property
    def is_alive(self):
        if self.driver is not None:
            try:
                self.driver.execute_script('javascript:void(0);')
                return True
            except JavascriptException:
                pass
        return False

    def close(self):
        if self.is_alive:
            self.driver.close()
        self._driver = None

    @property
    def driver(self):
        return self._driver

    @property
    def dom(self):
        parser = etree.HTMLParser()
        tree = etree.parse(StringIO(self.html), parser)
        return tree.getroot()

    def record_page_html(self):
        self._recent_page_html = self.html

    def record_window_handles(self):
        self._recent_window_handles = self.driver.window_handles

    @property
    def is_page_change(self):
        return self.html != self._recent_page_html or len(self.driver.window_handles) != len(self._recent_window_handles)

    @property
    def html(self):
        return self.driver.execute_script("return document.documentElement.outerHTML")

    @property
    def url(self):
        return self._url

    @url.setter
    def url(self, url: str):
        self._url = url
        self._driver.get(url)
