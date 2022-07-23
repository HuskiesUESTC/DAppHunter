from util.config import config
import requests
import json

IMAGE_URL = 'url'
IMAGE_ENCODE = 'img'


def recognize_image(image_type: str = None, value: str = None):
    if image_type not in (IMAGE_ENCODE, IMAGE_URL):
        raise RuntimeError('The image_type argument is invalid!')
    url = config['ali-ocr']['url']
    payload = {"prob": False, "charInfo": False, "rotate": False, "table": False, "sortPage": False, "noStamp": False,
               "figure": False, "row": False, "paragraph": False, "oricoord": True, image_type: value}
    headers = {
        'Authorization': 'AppCode ' + config['ali-ocr']['app-code'],
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=json.dumps(payload))
    data = json.loads(response.text)
    print(data)
    result = []
    for item in data['prism_wordsInfo']:
        word = item['word']
        top_left, bottom_right = item['pos'][0], item['pos'][2]
        result.append({'word': word, 'pos': {'x': (top_left['x'] + bottom_right['x']) / 2,
                                             'y': (top_left['y'] + bottom_right['y']) / 2}})
    return result
