import redis

from util.configuration import config

_redis_config = config['redis']

POOL = redis.ConnectionPool(host=_redis_config['host'],
                            port=_redis_config['port'],
                            max_connections=_redis_config['max-connections'])
