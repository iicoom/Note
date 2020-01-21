# https://stackoverflow.com/questions/31663288/how-do-i-properly-use-connection-pools-in-redis

# settings.py:
import redis

def get_redis_connection():
    return redis.StrictRedis(host='localhost', port=6379, db=0)

# task1.py
import settings

connection = settings.get_redis_connection()

def do_something1():
    return connection.hgetall(...)

# task2.py
import settings

connection = settings.get_redis_connection()

def do_something1():
    return connection.hgetall(...)

# So each task file has its own redis instance (which presumably is very expensive).
# What's the best way of optimizing this process. Is it possible to use connection pools for this example?


# You could choose to setup the connection pool in the init method and make the pool global 
# (you can look at other options if uncomfortable with global).
redis_pool = None

def init():
    global redis_pool
    print("PID %d: initializing redis pool..." % os.getpid())
    redis_pool = redis.ConnectionPool(host='10.0.0.1', port=6379, db=0)
    
# You can then retrieve the connection from a pool like this:
redis_conn = redis.Redis(connection_pool=redis_pool)

redis-cli info
Redis-py provides a connection pool for you from which you can retrieve a connection. Connection pools create a set of connections which you can use as needed (and when done - the connection is returned to the connection pool for further reuse). Trying to create connections on the fly without discarding them (i.e. not using a pool or not using the pool correctly) will leave you with way too many connections to redis (until you hit the connection limit).

You could choose to setup the connection pool in the init method and make the pool global (you can look at other options if uncomfortable with global).

redis_pool = None

def init():
    global redis_pool
    print("PID %d: initializing redis pool..." % os.getpid())
    redis_pool = redis.ConnectionPool(host='10.0.0.1', port=6379, db=0)
You can then retrieve the connection from a pool like this:

redis_conn = redis.Redis(connection_pool=redis_pool)
Also, I am assuming you are using hiredis along with redis-py as it should improve performance in certain cases. Have you also checked the number of connections open to the redis server with your existing setup as it most likely is quite high? You can use the INFO commmand to get that information:

# redis-cli info
# Check for the Clients section in which you will see the "connected_clients" field that will tell you how many connections 
# you have open to the redis server at that instant.
