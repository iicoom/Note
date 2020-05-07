https://help.aliyun.com/video_detail/67400.html?spm=5176.13910061.0.0.1911529f6ow0wE&aly_as=ez04-nAPQ

## 使用 OSS 管理控制台
- 开通 OSS 服务
- 创建存储空间
- 上传文件
- 下载文件
- 删除文件
- 删除存储空间

## 基本概念
1. 存储空间（Bucket）
存储空间是用户用于存储对象（Object）的容器，所有的对象都必须隶属于某个存储空间。存储空间具有各种配置属性，包括地域、访问权限、存储类型等。用户可以根据实际需求，创建不同类型的存储空间来存储不同的数据。

2. Region（地域）
Region 表示 OSS 的数据中心所在物理位置。用户可以根据费用、请求来源等选择合适的地域创建 Bucket。一般来说，距离用户更近的 Region 访问速度更快。详情请查看 OSS 已经开通的 Region。

3. AccessKey（访问密钥）
AccessKey（简称 AK）指的是访问身份验证中用到的 AccessKeyId 和 AccessKeySecret。OSS 通过使用 AccessKeyId 和 AccessKeySecret 对称加密的方法来验证某个请求的发送者身份。

4. 数据冗余机制
OSS 使用基于纠删码、多副本的数据冗余存储机制，将每个对象的不同冗余存储在同一个区域内多个设施的多个设备上，确保硬件失效时的数据可靠性和可用性。
OSS Object 操作具有强一致性，用户一旦收到了上传/复制成功的响应，则该上传的 Object 就已经立即可读，且数据已经冗余写入到多个设备中。

## 最佳实践
阿里云对象存储 OSS 最佳实践主要介绍数据迁移、数据备份和容灾、数据直传 OSS、数据处理与分析、音视频转码、使用 Terraform 管理 OSS 等操作，帮助您更加高效地使用 OSS，满足您的业务需求。

[Web端上传介绍](https://help.aliyun.com/document_detail/112718.html?spm=a2c4g.11186623.6.1520.41293455kQju8H)

1. 利用OSS Browser.js SDK 将文件上传到 OSS
2. 小程序

## 音视频转码
提交转码作业