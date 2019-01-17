[运维工程师必须掌握的基础技能有哪些？](https://www.zhihu.com/question/23665108)

## free   memory usage
[root@gitlab deploy]# free -h
              total        used        free      shared  buff/cache   available
Mem:           3.7G        2.8G        111M        194M        773M        434M
Swap:            0B          0B          0B

## df  -- Disk Free
[root@gitlab deploy]# df s-admin -h
文件系统        容量  已用  可用    已用% 挂载点
/dev/vda1      60G  4.2G   52G    8%   /

## du    disk usage
[root@gitlab deploy]# du -sh s-admin   文件夹总和大小
3.2M	s-admin

## top
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
21960 chrony    20   0 1008864 509736   1568 S   1.3 13.1  16:41.38 bundle
 1349 root      20   0   55856  12760  12272 S   0.3  0.3   3:54.37 systemd-journal
 6235 root      20   0   37696   8028   2116 S   0.3  0.2   4:13.32 gitlab-runner
13179 root      20   0  286716   7752    704 S   0.3  0.2   0:01.08 docker-containe
19060 root      20   0  162040   1336    548 R   0.3  0.0   0:00.22 top
21953 992       20   0   18532  10680   2588 S   0.3  0.3   1:12.18 node_exporter