## 为什么要用ES？
1. 2013年初，GitHub抛弃了Solr，采取ElasticSearch 来做PB级的搜索。 “GitHub使用ElasticSearch搜索20TB的数据，包括13亿文件和1300亿行代码”。

2. 维基百科：启动以elasticsearch为基础的核心搜索架构。 

3. SoundCloud：“SoundCloud使用ElasticSearch为1.8亿用户提供即时而精准的音乐搜索服务”。

4. 百度：百度目前广泛使用ElasticSearch作为文本数据分析，采集百度所有服务器上的各类指标数据及用户自定义数据，通过对各种数据进行多维分析展示，辅助定位分析实例异常或业务层面异常。目前覆盖百度内部20多个业务线（包括casio、云分析、网盟、预测、文库、直达号、钱包、风控等），单集群最大100台机器，200个ES节点，每天导入30TB+数据。

近年ElasticSearch发展迅猛，已经超越了其最初的纯搜索引擎的角色，现在已经增加了数据聚合分析（aggregation）和可视化的特性，如果你有数百万的文档需要通过关键词进行定位时，ElasticSearch肯定是最佳选择。当然，如果你的文档是JSON的，你也可以把ElasticSearch当作一种“NoSQL数据库”， 应用ElasticSearch数据聚合分析（aggregation）的特性，针对数据进行多维度的分析。

## 官网
https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html?spm=a2c4g.11186623.2.12.4f363075WV9s7g

## 阿里云
https://help.aliyun.com/document_detail/57770.html?spm=a2c4g.11186623.6.542.6a0f1addq9g5am

## Elasticsearch学习，请先看这一篇！
https://blog.csdn.net/makang110/article/details/80596017

## 搭建ElasticSearch+MongoDB检索系统
