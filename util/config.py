import yaml


def get_config(filepath):
    with open(filepath, 'r', encoding="utf-8") as config_file:
        return yaml.load(config_file, Loader=yaml.FullLoader)


config = get_config('./config.yaml')
