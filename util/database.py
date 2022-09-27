import mysql.connector
from util.config import config


class Database:

    def __init__(self):
        self._conn = mysql.connector.connect(
            user=config['mysql']['user'],
            password=config['mysql']['password'],
            database=config['mysql']['database']
        )

    def query_dapp_info(self, category: str, protocols: str):
        sql = "select * from dapp_radar where category = '{}' and alive = 1 and protocols like '%{}%'" \
               .format(category, protocols)
        print(sql)
        return self._select(sql)

    def _select(self, sql) -> []:
        cursor = self._conn.cursor(dictionary=True)
        cursor.execute(sql)
        return cursor.fetchall()

    def close(self):
        self._conn.close()
