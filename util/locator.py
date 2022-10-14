from lxml.etree import _Element
import copy
import difflib
from nltk import word_tokenize, corpus, stem

SKIP_TAGS = ['image', 'svg']

STOP_WORDS = corpus.stopwords.words('english')
INTER_PUNCTUATIONS = [',', '.', ':', ';', '?', '(', ')', '[', ']', '&', '!', '*', '@', '#', '$', '%', '-']
NON_SENSE_WORDS = set(INTER_PUNCTUATIONS + STOP_WORDS)
PORTER_STEMMER = stem.PorterStemmer()


# 文本预处理
def extract_stem_words(paragraph: str) -> [str]:
    # 分词
    paragraph = paragraph.replace('-', ' ')
    custom_words = word_tokenize(paragraph)
    # 去除其中无意义的符号和停止词
    custom_words = [word for word in custom_words if word not in NON_SENSE_WORDS]
    # 提取词干
    custom_words = [PORTER_STEMMER.stem(word) for word in custom_words]
    return custom_words


# 计算当前标签与匹配词的相似度
def calculate_text_similarity(text_stem_words: [], keyword_stem_words: []) -> float:
    copied_text_stem_words = copy.deepcopy(text_stem_words)
    copied_keyword_stem_words = copy.deepcopy(keyword_stem_words)
    text_stem_set = set(copied_text_stem_words)
    keyword_stem_set = set(copied_keyword_stem_words)
    item_length = len(keyword_stem_set)
    matched_count = 0
    # 只有两个数组中的一个为空时，迭代才停止
    while len(text_stem_set) > 0 and len(keyword_stem_set) > 0:
        # 寻找匹配度最大的word
        max_similarity = 0
        matched_keyword_item = None
        matched_text_item = None
        for keyword_stem_word in keyword_stem_set:
            # 如果找到了完全匹配的word，设置相应的key，并退出
            if keyword_stem_word in text_stem_set:
                max_similarity = 1
                matched_keyword_item = keyword_stem_word
                matched_text_item = keyword_stem_word
                break
            for text_stem_word in text_stem_words:
                if keyword_stem_word in text_stem_word:
                    max_similarity = 1
                    matched_keyword_item = keyword_stem_word
                    matched_text_item = text_stem_word
                    break
        # 如果完全匹配上，则删除相关word
        if max_similarity == 1:
            matched_count += 1
            keyword_stem_set.remove(matched_keyword_item)
            text_stem_set.remove(matched_text_item)
        # 如果没有匹配，则退出整个循环
        if max_similarity == 0:
            break
    # 如果keywords数组为空，则直接返回100%的相似度
    if len(keyword_stem_set) == 0:
        return 1
    # 如果text数组为空，则返回匹配部分的相似度
    if len(text_stem_set) == 0:
        return matched_count / item_length
    # 如果两者均不为空
    keyword_str = ''.join(keyword_stem_set)
    text_str = ''.join(text_stem_set)
    total_similarity = matched_count / item_length + \
                       difflib.SequenceMatcher(None, keyword_str, text_str).ratio() / item_length \
                       * (item_length - matched_count) * 0.5
    return total_similarity


# 计算当前标签在所有合适标签中的相似度
def calculate_attr_similarity(cur_cnt: int, total_cnt: int) -> float:
    return cur_cnt / total_cnt


# 计算当前标签的综合评分
def calculate_score(text_similarity: float, attr_similarity: float) -> float:
    return text_similarity * 0.8 + attr_similarity * 0.2


# 跳过标签
def skip_tags_constraint(element: _Element, keyword_stem_word_list: [list]) -> bool:
    return element.tag not in SKIP_TAGS


# 跳过包含url属性标签约束
def skip_url_attr_tag_constraint(element: _Element, keyword_stem_word_list: [list]) -> bool:
    attributes = element.attrib
    for attr_key in attributes:
        attr_value = attributes[attr_key]
        if isinstance(attr_value, str) and attr_value.startswith('http'):
            return False
    return True


# 文本长度约束
def limit_text_length_constraint(element: _Element, keyword_stem_word_list: [list]) -> bool:
    return element.text is None or len(element.text) < 50


# 文本匹配约束
def match_text_constraint(element: _Element, keyword_stem_word_list: [list]) -> float:
    if element.text is None:
        return 0
    text_stem_words = extract_stem_words(element.text)
    max_similarity = 0
    for keyword_stem_words in keyword_stem_word_list:
        max_similarity = max(max_similarity, calculate_text_similarity(text_stem_words, keyword_stem_words))
    return max_similarity


# placeholder匹配约束
def match_placeholder_constraint(element: _Element, keyword_stem_word_list: [list]) -> float:
    if element.tag not in ['input'] or not element.attrib.get('placeholder', None):
        return 0
    placeholder_stem_words = extract_stem_words(element.attrib.get('placeholder'))
    max_similarity = 0
    for keyword_stem_words in keyword_stem_word_list:
        max_similarity = max(max_similarity, calculate_text_similarity(placeholder_stem_words, keyword_stem_words))
    return max_similarity


# 属性匹配约束
def match_attr_constraint(element: _Element, keyword_stem_word_list: [list]) -> float:
    if not element.attrib:
        return 0
    max_similarity = 0
    for attr_key in element.attrib:
        attr_value = element.attrib[attr_key]
        if isinstance(attr_value, str):
            attr_stem_words = extract_stem_words(attr_value)
            for keyword_stem_words in keyword_stem_word_list:
                max_similarity = max(max_similarity, calculate_text_similarity(attr_stem_words, keyword_stem_words))
    return max_similarity


HARD_CONSTRAINTS = [
    skip_tags_constraint,
    limit_text_length_constraint,
    # skip_url_attr_tag_constraint,
]

SOFT_CONSTRAINTS = {
    'text': [
        match_text_constraint,
        match_placeholder_constraint,
    ],
    'attr': [
        match_attr_constraint
    ],
    'xpath': []
}


# 获取约束条件
def get_constraints(context) -> {}:
    return {
        'hard': HARD_CONSTRAINTS,
        'soft': SOFT_CONSTRAINTS[context]
    }


# 检查元素，返回检测结果，如果检测成功，其中包含相应关键字的匹配度
def check_element(element: _Element, keyword_stem_word_list: [list], context: str) -> float:
    constraints = get_constraints(context)
    for hard_constraint in constraints['hard']:
        if not hard_constraint(element, keyword_stem_word_list):
            return 0
    max_similarity = 0
    for soft_constraint in constraints['soft']:
        max_similarity = max(max_similarity, soft_constraint(element, keyword_stem_word_list))
    return max_similarity


# 定位合适的元素
def find_suitable_elements(root: _Element, xpath_fetch_func, keyword_stem_word_list: [list] = None,
                           tags: [str] = None, context: str = 'text') -> [{}]:
    result = []
    for sub_element in root.getchildren():
        # 如果找到了与keyword相似的元素，则停止向下递归
        similarity = check_element(sub_element, keyword_stem_word_list, context)
        if similarity > 0.8:
            xpath = xpath_fetch_func(sub_element)
            if not tags or any(map(lambda tag: tag in xpath, tags)):
                attr_key = '-'.join(sub_element.attrib.keys())
                result.append({
                    'html_element': sub_element,
                    'text_similarity': similarity,
                    'attr_similarity': 0,
                    'attr_key': attr_key,
                    'xpath': xpath
                })
                continue
        # 继续向下递归
        result += find_suitable_elements(root=sub_element,
                                         xpath_fetch_func=xpath_fetch_func,
                                         keyword_stem_word_list=keyword_stem_word_list,
                                         tags=tags,
                                         context=context)
    return result
