/**
 * Created by fenglitan on 15/4/17.
 */
'use strict';

require("./models");
// require("./service/memcache");
var nodemailer = require('nodemailer');
var later = require('later');
var xlsx = require('node-xlsx');
var fs = require('fs');
var q = require('q');
var config = require('./config');
var util = require('./util/index');
var userService = require('./service/user');
var batchService = require('./service/batch');
var orderService = require('./service/order');
var recommendRecordService = require("./service/recommend_record");
var ranchUtil = util.ranchUtil;
var constant = util.constant;
var RoleType = constant.RoleType;
var OrderType = constant.OrderType;
var OrderState = constant.OrderState;
var mailConfig = config.mail_config;
var smtpTransport = nodemailer.createTransport('SMTP', mailConfig.from);

initStatistics();

function initStatistics(){

    var basic = {h: [2], m: [1]};
    var composite = [
        basic
    ];
    var sched = {
        schedules:composite
    };
    later.date.localTime();
    later.setInterval(statistics, sched);
    console.log("创建每日定时统计任务完成");
};

function statistics() {
    console.log("每日统计开始");
    var result = {};
    var error;
    var newTime = ranchUtil.getNowTime();   // 获取当前时间
    var endTime = ranchUtil.timeStrToNum(ranchUtil.formatDate(newTime, "yyyy-MM-dd"));    // 获取前一天24点
    var beginTime = ranchUtil.timeStrToNum(ranchUtil.formatDate(newTime - 1000 * 60 * 60 * 24, "yyyy-MM-dd")); // 获取前一天0点

    var userIds = [];                   // 注册用户id数组
    var newUserCount = 0;               // 新注册用户数量
    var newUserIds = [];                // 新注册用户id数组
    var recommendUserIds = [];          // 被邀请用户id数组
    var newRecommendUserCount = 0;      // 新注册被邀请用户数量
    var newRecommendUserIds = [];       // 新注册被邀请用户id数组

    var newBuyUserIds = [];             // 新注册购买用户id数组
    var newBuyAmount = 0;               // 新注册购买金额
    var buyUserIds = [];                // 注册并购买用户id数组
    var buyAmount = 0;                  // 购买金额
    var newRecommendBuyUserIds = [];    // 新注册邀请购买用户id数组
    var newRecommendBuyAmount = 0;      // 新注册邀请购买金额
    var recommendBuyUserIds = [];       // 注册邀请购买用户id数组
    var recommendBuyAmount = 0;         // 注册邀请购买金额
    var newSendUserIds = [];            // 新赠送红包用户id数组
    var newSendAmount = 0;              // 新赠送红包金额
    var sendUserIds = [];               // 赠送红包用户id数组
    var sendAmount = 0;                 // 赠送红包金额
    var newReceiveMobiles = [];         // 新接收红包手机号数组
    var newReceiveAmount = 0;           // 新接收红包金额
    var receiveMobiles = [];            // 接收红包手机号数组
    var receiveAmount = 0;              // 接收红包金额
    var newReceiveSheepMap = {};        // 新接收羊批次
    var receiveSheepMap = {};           // 接收羊批次

    q.nfcall(userService.findUsers, {role_type: RoleType.User, create_time: {$lt: endTime}})   // 查询截止昨天的所有注册用户
        .then(function (users) {
            result.user_count = users.length;   // 结果赋值注册用户数量

            // 遍历所有用户
            users.forEach(function (user) {
                // 将所有用户的手机号放入注册用户手机号数组
                userIds.push(user._id.toString());
                // 判断用户是否昨天注册 是的话为新注册用户数量增加+1 同时把手机号放入新注册用户手机号数组
                if (user.create_time >= beginTime) {
                    newUserCount = newUserCount + 1;
                    newUserIds.push(user._id.toString());
                }
            });
            result.new_user_count = newUserCount;    // 结果赋值新注册用户数量
            // 查询被邀请用户
            return q.nfcall(recommendRecordService.query, {create_time: {$lt: endTime}});
        })
        .then(function (recommendRecords) {
            result.recommend_user_count = recommendRecords.length;
            recommendRecords.forEach(function (recommendRecord) {
                recommendUserIds.push(recommendRecord.recommend_user_id);
                // 被邀请用户是否新注册
                if (newUserIds.indexOf(recommendRecord.recommend_user_id) != -1) {
                    newRecommendUserCount = newRecommendUserCount + 1;
                    newRecommendUserIds.push(recommendRecord.recommend_user_id);
                }
            });
            result.new_recommend_user_count = newRecommendUserCount;
            // 查询订单
            return q.nfcall(orderService.getOrderByCondition, {create_time: {$lt: endTime},
                type: {$in: [OrderType.Normal, OrderType.Presented, OrderType.NormalPresented]},
                state: {$in: [OrderState.Payed, OrderState.Finish]}});
        })
        .then(function (orders) {
            orders.forEach(function (order) {
                // 检验是否用户购买且未取消订单
                if (order.type == OrderType.Normal || order.type == OrderType.NormalPresented) {
                    buyAmount = buyAmount + order.amount;
                    buyUserIds.indexOf(order.user_id) == -1 && buyUserIds.push(order.user_id);

                    // 检验是否新注册用户购买
                    if (newUserIds.indexOf(order.user_id) != -1) {
                        newBuyUserIds.indexOf(order.user_id) == -1 && newBuyUserIds.push(order.user_id);
                        newBuyAmount = newBuyAmount + order.amount;
                    }

                    // 检验是否新注册被邀请用户购买
                    if (newRecommendUserIds.indexOf(order.user_id) != -1) {
                        newRecommendBuyUserIds.indexOf(order.user_id) == -1 && newRecommendBuyUserIds.push(order.user_id);
                        newRecommendBuyAmount = newRecommendBuyAmount + order.amount;
                    }

                    // 检验是否注册被邀请用户购买
                    if (recommendUserIds.indexOf(order.user_id) != -1) {
                        recommendBuyUserIds.indexOf(order.user_id) == -1 && recommendBuyUserIds.push(order.user_id);
                        recommendBuyAmount = newRecommendBuyAmount + order.amount;
                    }
                }

                // 检验该笔交易是否未取消正常赠送订单
                if (order.type == OrderType.NormalPresented && order.state != OrderState.Cancel) {
                    sendUserIds.indexOf(order.user_id) == -1 && sendUserIds.push(order.user_id);
                    sendAmount = sendAmount + order.amount;
                    // 检验该笔交易是否新赠送订单
                    if (order.create_time >= beginTime) {
                        newSendUserIds.indexOf(order.user_id) == -1 && newSendUserIds.push(order.user_id);
                        newSendAmount = newSendAmount + order.amount;
                    }
                }


                // 检验赠送订单是否被接收
                if (order.type == OrderType.Presented && order.state == OrderState.Finish) {
                    receiveMobiles.indexOf(order.other_info.receive_user_mobile) == -1 && receiveMobiles.push(order.other_info.receive_user_mobile);
                    receiveSheepMap[order.batch_id] = receiveSheepMap[order.batch_id] || 0 + order.sheep_num;
                    // 检验该笔交易是否新接收订单
                    if (order.finish_time >= beginTime) {
                        newReceiveMobiles.indexOf(order.other_info.receive_user_mobile) == -1 && newReceiveMobiles.push(order.other_info.receive_user_mobile);
                        newReceiveSheepMap[order.batch_id] = newReceiveSheepMap[order.batch_id] || 0 + order.sheep_num;
                    }
                }

                // 红包已接收金额 issue #28
                if (order.type === OrderType.Presented) {
                    receiveAmount += (order.original_amount || 0);
                }
            });
            result.new_buy_user_count = newBuyUserIds.length;
            result.new_buy_amount = newBuyAmount;
            result.buy_user_count = buyUserIds.length;
            result.buy_amount = buyAmount;
            result.new_recommend_buy_user_count = newRecommendBuyUserIds.length;
            result.new_recommend_buy_amount = newRecommendBuyAmount;
            result.recommend_buy_user_count = recommendBuyUserIds.length;
            result.recommend_buy_amount = recommendBuyAmount;
            result.new_send_user_count = newSendUserIds.length;
            result.new_send_amount = newSendAmount;
            result.send_user_count = sendUserIds.length;
            result.send_amount = sendAmount;
            result.new_reveive_user_count = newReceiveMobiles.length;
            result.reveive_user_count = receiveMobiles.length;
            result.reveive_amount = receiveAmount;

            return q.nfcall(batchService.query);
        })
        .then(function (batchs) {
            batchs.forEach(function (batch) {
                // if (batch._id.toString() in receiveSheepMap) {
                //     receiveAmount = receiveAmount + batch.unit_price * receiveSheepMap[batch._id.toString()];
                // }
                if (batch._id.toString() in newReceiveSheepMap) {
                    newReceiveAmount = newReceiveAmount + batch.unit_price * newReceiveSheepMap[batch._id.toString()];
                }
            });
            // result.new_reveive_amount = newReceiveAmount;
            result.reveive_amount = receiveAmount;

        })
        .then(function () {
            //定义下载的文件名（每天统计数据 年月日.xlsx）
            var fileName = "每天统计数据" + ranchUtil.formatDate(beginTime, 'yyyy-MM-dd') + ".xlsx";

            var data = [
                ['日期',
                    '当天新注册人数', '新注册并购买人数', '新注册购买金额',
                    '累计注册人数', '累计注册并购买人数', '累计购买金额',
                    '当天新注册被邀请人数', '当天新注册被邀请并购买人数', '当天新注册被邀请并购买金额',
                    '累计注册被邀请人数', '累计注册被邀请并购买人数', '累计注册被邀请并购买金额',
                    '当天赠送红包人数', '当天赠送红包金额', '当天接受红包赠送成功人数', '当天接受红包赠送成功金额',
                    '累计赠送红包人数', '累计赠送红包金额', '累计接受红包赠送成功人数', '累计接受红包赠送成功金额']
            ];
            var item = [ranchUtil.formatDate(beginTime),
                result.new_user_count, result.new_buy_user_count, result.new_buy_amount,
                result.user_count, result.buy_user_count, result.buy_amount,
                result.new_recommend_user_count, result.new_recommend_buy_user_count, result.new_recommend_buy_amount,
                result.recommend_user_count, result.recommend_buy_user_count, result.recommend_buy_amount,
                result.new_send_user_count, result.new_send_amount, result.new_reveive_user_count, result.new_reveive_amount,
                result.send_user_count, result.send_amount, result.reveive_user_count, result.reveive_amount];
            data.push(item);
            var buffer = xlsx.build([
                {name: "每天统计数据", data: data}
            ]);
            fs.writeFileSync("./statistics/" + fileName, buffer, 'binary');
            console.log("统计成功");
            var xlsxfile = fs.readFileSync('./statistics/' + fileName);
            var attachment = [
                {
                    'filename': fileName,   //这里只是给附件取名称
                    'contents': xlsxfile //导入文件
                }
            ];
            sendEmail(ranchUtil.formatDate(beginTime) + '统计', '', attachment);
            return fileName;
        }).then(function (fileName) {
        }).catch(function (err) {
            console.log("统计失败" + err);
        }).finally(function () {
            console.log("每日统计结束");
        });
}

/**
 * 发送邮件
 * @param subject
 * @param html
 * @param attachments
 */
function sendEmail (subject, html, attachments){
    console.log("开始发送邮件");
    // 设置邮件内容
    var mailOptions = {
        from: [mailConfig.from.name, mailConfig.from.auth.user].join(' '), // 发件地址
        to: mailConfig.to.join(','), // 收件列表
        subject: subject, // 标题
        html: html, // html 内容
        attachments:attachments// 添加附件
    };

    // 发送邮件
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
        smtpTransport.close(); // 如果没用，关闭连接池
    });
}

