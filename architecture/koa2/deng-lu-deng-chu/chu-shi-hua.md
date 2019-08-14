# 初始化

## app 登录后初始化操作

1. 获取app 的版本信息
2. 用户登录中心 session对当前用户登录状态的判断 session信息的获取
3. 主应用程序接口：
4. v2中 对session中access\_token的设置
5. v2中 users 携带access\_token核实用户是否存在
6. server 获取登录用户的登录时间
7. msg 获取当前用户的消息数量及未读消息数量 access\_token
8. batch 获取当前用户正在进行的批次信息 access\_token
9. order 获取当前用户的总收益 receiveOrderCount这个是啥？ access\_token
10. announcement 获取最新一条公告信息 access\_token
11. 获取当前用户的推荐码信息
12. 获取当前用户的order
13. ranch api 获取会员相关信息

## app 签到功能 点击签到进入签到页面 ranch api

1. 获取签到任务
2. 点击签到 获取签到信息 /members/:id/signs
3. /members/:id/reward
4. /members/:id/signReward 获取签到奖励信息和次数
5. 获取或参加的活动信息 activities

