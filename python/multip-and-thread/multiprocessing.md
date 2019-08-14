# multiprocessing.Pool

进程池的使用有四种方式：apply\_async、apply、map\_async、map。其中apply\_async和map\_async是异步的，也就是启动进程函数之后会继续执行后续的代码不用等待进程函数返回。 进程池： import multiprocessing

pool = multiprocessing.Pool\(processes=4\)

result = pool.apply\_async\(func, \(msg, \)\)

线程池： 线程池的使用方式和进程池类似。

from multiprocessing.dummy import Pool as ThreadPool import time

async\_pool = ThreadPool\(processes=4\) result = async\_pool.map\_async\(fun, arg\)

