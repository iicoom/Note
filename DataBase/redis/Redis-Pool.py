# https://stackoverflow.com/questions/31663288/how-do-i-properly-use-connection-pools-in-redis
import redis

def get_redis_connection():
    return redis.StrictRedis(host='localhost', port=6379, db=0)
