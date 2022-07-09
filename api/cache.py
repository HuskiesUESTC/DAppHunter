import redis

redisServer = 'localhost'
redisPort = '6379'
maxConnections = 64

POOL = redis.ConnectionPool(
    host=redisServer, port=redisPort, max_connections=maxConnections)


# hexSig: str -> Method: dict
def get():
    conn = redis.StrictRedis(connection_pool=POOL)
    pass


def set():
    pass
