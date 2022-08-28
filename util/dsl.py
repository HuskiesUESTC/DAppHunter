import os.path
from util.config import get_config, config
from py2neo import Graph, Node, Relationship, Transaction


# 解析单个意图
def parse_single_intention(intention_file_path: str) -> {}:
    intention_data = get_config(intention_file_path)['intention']
    # 获取配置文件中的路径信息
    sub_paths = {}
    full_paths = {}
    if 'sub-path' in intention_data and intention_data['sub-path'] is not None:
        sub_paths = intention_data['sub-path']
    if 'full-path' in intention_data and intention_data['full-path'] is not None:
        full_paths = intention_data['full-path']

    # 获取全路径对应的操作
    def get_actions(full_path_name: str) -> []:
        data = []
        if full_path_name in full_paths:
            for action in full_paths[full_path_name]:
                suffix = action.strip('link-')
                # 如果存在子路径
                if suffix in sub_paths:
                    data += sub_paths[suffix]
                elif suffix in full_paths:
                    data += get_actions(suffix)
                else:
                    data.append(action)
        return data

    action_paths = []
    # 遍历每一个全节点
    for full_path_name in full_paths:
        actions = get_actions(full_path_name)
        action_paths.append(actions)
    if 'bias' not in intention_data:
        intention_data['bias'] = 0
    return {
        'name': intention_data['name'],
        'actions': intention_data['actions'],
        'action_paths': action_paths,
        'pre_requirements': intention_data['pre-requirements'],
        'after_requirements': intention_data['after-requirements'],
        'bias': intention_data['bias']
    }


# 解析所有的意图
def parse_all_intentions(intention_dir: str) -> {}:
    intention_file_list = os.listdir(intention_dir)
    intentions = {}
    for intention_file_name in intention_file_list:
        intention_file_path = intention_dir + '/' + intention_file_name
        intention_data = parse_single_intention(intention_file_path)
        intentions[intention_data['name']] = intention_data
    return intentions


# 插入用于标记的开始与终止意图节点
def insert_flag_intention_nodes(tx: Transaction):
    start = Node('Intention', name='start')
    end = Node('Intention', name='end')
    tx.create(start)
    tx.create(end)
    return {
        'start': start,
        'end': end
    }


# 插入单个意图节点
def insert_intention_nodes(tx: Transaction, intention_info: {}) -> Node:
    intention_label = 'Intention'
    action_label = intention_info['name']
    action_relation_label = 'next'
    impl_relation_label = 'impl'
    action_nodes = {}

    # 创建前端操作节点
    def insert_action_nodes():
        # 创建前端基础操作节点
        actions = intention_info['actions']
        # 添加start
        actions['start'] = {'operation': 'start'}
        actions['end'] = {'operation': 'end'}
        for action_name in actions:
            action = actions[action_name]
            action_node = Node('Action', action_label, name=action_name, operation=action['operation'])
            # 设置作用域
            if 'scope' in action:
                action_node.setdefault('scope', action['scope'])
            # 设置关键字
            if 'keywords' in action:
                action_node.setdefault('keywords', action['keywords'])
            # 设置xpath
            if 'xpath' in action:
                action_node.setdefault('xpath', action['xpath'])
            # 设置data
            if 'data' in action:
                action_node.setdefault('data', action['data'])
            if 'tags' in action:
                action_node.setdefault('tags', action['tags'])
            # select 元素时设置选择顺序，默认为正序
            if 'sort' in action:
                action_node.setdefault('sort', action['sort'])
            # 当前操作执行成功等待时间
            if 'wait-time' in action:
                action_node.setdefault('wait-time', action['wait-time'])
            if 'bias' not in action:
                action['bias'] = 0
            action_node.setdefault('bias', action['bias'])
            tx.create(action_node)
            action_nodes[action_name] = action_node

    # 创建前端操作关系
    def insert_action_relationships():
        # 计算节点之间的关系映射，需要去重
        action_paths = intention_info['action_paths']
        action_relationship_map = {}
        for action_path in action_paths:
            action_path.insert(0, 'start')
            action_path.append('end')
            for i in range(len(action_path) - 1):
                start_action = action_path[i]
                next_action = action_path[i + 1]
                if start_action not in action_relationship_map:
                    action_relationship_map[start_action] = set()
                action_relationship_map[start_action].add(next_action)
        # 建立连接
        for start_action in action_relationship_map:
            if start_action not in action_nodes:
                raise RuntimeError(action_label, start_action, '节点不存在')
            start_action_node = action_nodes[start_action]
            for end_action in action_relationship_map[start_action]:
                if end_action not in action_nodes:
                    raise RuntimeError(action_label, end_action, '节点不存在')
                end_action_node = action_nodes[end_action]
                action_relationship = Relationship(start_action_node, action_relation_label, end_action_node)
                tx.create(action_relationship)

    # 创建意图与前端实现节点
    def insert_intention_node():
        intention_node = Node(intention_label, name=intention_info['name'])
        intention_node.setdefault('bias', intention_info['bias'])
        tx.create(intention_node)
        start_action_node = action_nodes['start']
        impl_relationship = Relationship(intention_node, impl_relation_label, start_action_node)
        tx.create(impl_relationship)
        return intention_node

    # 事务处理
    try:
        # 创建前端操作节点
        insert_action_nodes()
        # 创建前端操作关系
        insert_action_relationships()
        # 创建意图节点
        intention_node = insert_intention_node()
        return intention_node
    except RuntimeError as err:
        raise err


# 设置意图节点关系
def insert_intention_relationships(tx: Transaction, intention_nodes: {}, category_dir: str):
    intention_relationship_map = {}
    intention_relationship_category_map = {}
    # 获取每个category文件中的意图序列
    for category_file_name in os.listdir(category_dir):
        category_file_path = category_dir + '/' + category_file_name
        category_data = get_config(category_file_path)['category']

        category_name = category_data['name']
        intention_sequences = category_data['intention-sequences']
        for intention_sequence in intention_sequences:
            intention_sequence.insert(0, 'start')
            intention_sequence.append('end')
            for i in range(len(intention_sequence) - 1):
                start_intention_name = intention_sequence[i]
                if start_intention_name not in intention_nodes:
                    raise RuntimeError(start_intention_name, '意图节点不存在')
                end_intention_name = intention_sequence[i + 1]
                if end_intention_name not in intention_nodes:
                    raise RuntimeError(end_intention_name, '意图节点不存在')
                if start_intention_name not in intention_relationship_map:
                    intention_relationship_map[start_intention_name] = set()
                intention_relationship_map[start_intention_name].add(end_intention_name)
                category_key = start_intention_name + ':to:' + end_intention_name
                if category_key not in intention_relationship_map:
                    intention_relationship_category_map[category_key] = set()
                intention_relationship_category_map[category_key].add(category_name)
    # 创建关系
    for start_intention_name in intention_relationship_map:
        for end_intention_name in intention_relationship_map[start_intention_name]:
            category_key = start_intention_name + ':to:' + end_intention_name
            categories = intention_relationship_category_map[category_key]
            start_intention_node = intention_nodes[start_intention_name]
            end_intention_node = intention_nodes[end_intention_name]
            relationship = Relationship(start_intention_node, 'next', end_intention_node, categories=list(categories))
            tx.create(relationship)


# 从本地加载配置到图中
def load_graph_from_pattern():
    graph = Graph(config['neo4j']['host'], auth=(config['neo4j']['username'], config['neo4j']['password']),
                  name=config['neo4j']['name'])
    tx = graph.begin()

    intention_dir = config['dir']['pattern'] + '/intention'
    intentions = parse_all_intentions(intention_dir)

    try:
        graph.run('match (n) detach delete n')
        # 逐个插入意图节点
        intention_nodes = {}
        for intention_name, intention_info in intentions.items():
            intention_node = insert_intention_nodes(tx, intention_info)
            intention_nodes[intention_name] = intention_node
        intention_nodes.update(insert_flag_intention_nodes(tx))

        # 更新意图节点之间的关系
        category_dir = config['dir']['pattern'] + '/category'
        insert_intention_relationships(tx, intention_nodes, category_dir)

        graph.commit(tx)
    except RuntimeError as err:
        print(err)
        graph.rollback(tx)


if __name__ == '__main__':
    load_graph_from_pattern()
