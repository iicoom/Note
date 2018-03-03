var xlsx = require('node-xlsx');
var fs = require('fs');
var userService = require('./service/user');
var batchService = require('./service/batch');
var orderService = require('./service/order');
var gradePower=require('./service/grade_power');
var jifenService = require("./service/jifen");

var q = require('q');
var util = require("./util");
var constant = util.constant;
var YunFarmError =require('./lib/error');
var moment=require('moment');


var qFindOrders = q.nbind(orderService.queryOrders, orderService);
var qFindUsersData = q.nbind(userService.getUserInfo, userService);
var qFindUsers = q.nbind(userService.queryUserInfo, userService);
var qFindBatchData = q.nbind(batchService.query, batchService);

function statistics() {
  console.log("订单统计开始");
  var error;

  var startTime = new Date('2018-01-01 00:00:00').getTime();

  // q.nfcall(orderService.aggregate, [{
  //     $match: {
  //        state: constant.OrderState.Finish,
  //       // finish_time: { $gt: startTime}
  //     }
  //   }, {
  //     $group: {
  //       _id: "$user_id",
  //       sheepNum: {
  //         $sum: "$sheep_num"
  //       }
  //     }
  //   }])
  //   .then(function(aggregateInfos){
  //     console.log(aggregateInfos);
  //   });

  var data = [
    ['用户姓名','联系方式', '会员等级', '云币余额', '已购总数', '批次编号', '订单编号', '购买数量', '下单时间']
  ];

/*
  查出所有符合条件的订单

  遍历查询每一条订单的用户信息添加到订单信息里

  遍历查询每一条订单的积分信息添加到订单信息里

  遍历查询每一条订单的用户等级添加到订单信息里
 */
  // 版本一：
  // n个订单
  // 遍历4次,数据库查询4n次,HTTP请求n次
  // q.nfcall(qFindOrders, {create_time: {$gt: startTime}, state: constant.OrderState.Finish}, null, null)
  //   .then(function(orders){
  //     var newOrders = [];
  //     orders.forEach(function(order){
  //       order = order.toObject();
  //       var item = qFindUsersData(order.user_id)
  //         .then(function(user) {
  //           if (user) {
  //             order.mobile = user.mobile;
  //             order.username = user.username;
  //           }
  //           return q.resolve(order);
  //         });
  //       newOrders.push(item);
  //     });
  //     return q.all(newOrders);
  //   })
  //   .then(function(orders) {
  //     var newOrders = [];
  //     orders.forEach(function(order){
  //       var item = qFindBatchData(order.batch_id)
  //         .then(function(batch){
  //           if (batch) {
  //             order.batch_code = batch.batch_code;
  //           }
  //           return q.resolve(order);
  //         });
  //       newOrders.push(item);
  //     });
  //     return q.all(newOrders);
  //   })
  //   .then(function(orders) {
  //     var newOrders = [];
  //     orders.forEach(function(order){
  //       var item = q.nfcall(gradePower.getGradePowerByUId,order.user_id)
  //         .then(function(gradePower){
  //           if(gradePower){
  //             order.grade = gradePower.gradeValue;
  //             return q.resolve(order);
  //           } else {
  //             throw new YunFarmError('', '会员等级特权信息不存在');
  //           }
  //         });
  //       newOrders.push(item);
  //     });
  //     return q.all(newOrders);
  //   })
  //   .then(function(orders) {
  //     var newOrders = [];
  //     orders.forEach(function(order){
  //       var item = q.nfcall(jifenService.findJiFenByUid,order.user_id)
  //       .then(function(jifen){
  //         if(gradePower){
  //           order.jifen = jifen.balance;
  //           return q.resolve(order);
  //         } else {
  //           throw new YunFarmError('', '会员等级特权信息不存在');
  //         }
  //       });
  //       newOrders.push(item);
  //     });
  //     return q.all(newOrders);
  //   })
  //   .then(function(orders) {
  //     orders.forEach(function(order){
  //       data.push([order.username, order.mobile, order.grade, order.jifen,
  //         order.amount, order.batch_code, order.order_code, order.sheep_num,
  //         moment(order.create_time).format('YYYY-MM-DD')]);
  //     });
  //   })
  //   .catch(function(err) {
  //     error = err;
  //     console.log(err);
  //   })
  //   .finally(function() {
  //     // 定义下载的文件名
  //     var fileName = "订单统计数据.xlsx";
  //
  //     console.log('========导出如下数据==========');
  //     console.log(data);
  //     var buffer = xlsx.build([
  //       {name: "订单统计数据", data: data}
  //     ]);
  //     // fs.writeFileSync("./statistics/" + fileName, buffer, 'binary');
  //     fs.writeFileSync( fileName, buffer, 'binary');
  //     console.log("统计成功");
  //   });


  // 版本二：
  // n个订单
  // 遍历1次,数据库查询4n次,HTTP请求n次
  // q.nfcall(qFindOrders, {}, null, null)
  //   .then(function(orders){
  //     orders.forEach(function(order){
  //       order = order.toObject();
  //
  //       var item = qFindUsersData(order.user_id)
  //           .then(function(user) {
  //             if (user) {
  //               order.mobile = user.mobile;
  //               order.username = user.username;
  //             }
  //             return q.resolve(order);
  //           })
  //           .then(function(order) {
  //             q.nfcall(gradePower.getGradePowerByUId,order.user_id)
  //               .then(function(gradePower) {
  //                 if(gradePower){
  //                   order.grade = gradePower.gradeValue;
  //                   return q.resolve(order);
  //                 } else {
  //                   throw new YunFarmError('', '会员等级特权信息不存在');
  //                 }
  //               })
  //               .then(function(order){
  //                 q.nfcall(jifenService.findJiFenByUid,order.user_id)
  //                   .then(function(jifen){
  //                     if(jifen){
  //                       order.jifen = jifen.balance;
  //                       return q.resolve(order);
  //                     } else {
  //                       throw new YunFarmError('', '会员等级特权信息不存在');
  //                     }
  //                   })
  //                   .then(function(order){
  //                     qFindBatchData(order.batch_id)
  //                       .then(function(batch){
  //                         if (batch) {
  //                           order.batch_code = batch.batch_code;
  //                         }
  //                         return q.resolve(order);
  //                       })
  //                       .then(function(order) {
  //                         data.push([order.username, order.mobile, order.grade, order.jifen,
  //                           order.amount, order.batch_code, order.order_code, order.sheep_num,
  //                           moment(order.create_time).format('YYYY-MM-DD')]);
  //                         return q.resolve(data);
  //                       })
  //                       .catch(function(err) {
  //                         error = err;
  //                         console.log(err);
  //                       })
  //                       .finally(function() {
  //                         // 定义下载的文件名
  //                         var fileName = "订单统计数据.xlsx";
  //
  //                         console.log('========导出如下数据==========');
  //                         console.log(data);
  //                         var buffer = xlsx.build([
  //                           {name: "订单统计数据", data: data}
  //                         ]);
  //                         // fs.writeFileSync("./statistics/" + fileName, buffer, 'binary');
  //                         fs.writeFileSync( fileName, buffer, 'binary');
  //                         console.log("统计成功");
  //                       });
  //                   });
  //
  //               });
  //           });
  //     });
  //   });

  // 版本三：
  // n个订单
  // 取出所有订单的用户ID到数组，有重复ID
  // 一次性数据库匹配 用户id，拿出用户信息，积分信息，等级信息，无重复
  // 遍历1次,数据库查询4次,HTTP请求n次
  var matchedOrders = [];
  var userids = [];
  var batchids = [];
  var matchedUsers = []; // 用于筛选对应订单的用户信息
  var matchedJifens = []; // 用于筛选对应订单的云币信息
  var matchedGrades = []; // 用于筛选对应订单的用户等级信息
  var matchedBatchs = []; // 用于筛选对应订单的批次信息
  var newOrders = [];

  q.nfcall(qFindOrders, {create_time: {$gt: startTime}, state: constant.OrderState.Finish}, null, null, null)
    .then(function(orders){
      matchedOrders = orders;
      orders.map(function(order) {
        userids.push(order.user_id);
        batchids.push(order.batch_id);
      });
    })
    .then(function(){
      return qFindUsers({ _id: { $in: userids } }); // 获取指定id的用户信息
    })
    .then(function(userList){
      matchedUsers = userList;
    })
    .then(function() {
      return new Promise((resolve, reject) => {
        jifenService.find({uid: userids},null,null,function(err, Jifens) {
          // console.log(Jifens)
          if(Jifens && Jifens.length !== 0) {
            resolve(Jifens);
          } else {
            reject('查询错误');
          }
        });
      })
    })
    .then(function(Jifens) {
      matchedJifens = Jifens;
      return q.resolve(batchids);  // 需要return下一个then才能接收到
    })
    .then(function(batchids){
      return qFindBatchData({ _id: { $in: batchids } });
    })
    .then(function(batchlist){
      console.log('batchlist=========================')
      console.log(batchlist)
      matchedBatchs = batchlist;
    })
    .then(function(){
      console.log('matchedOrders=======================')
      console.log(matchedOrders)
      console.log('matchedUser=======================')
      console.log(matchedUsers)
      matchedOrders.forEach((order) => {
        order = order.toObject();
        matchedUsers.map((user) => {
          if (order.user_id == user._id){
            order.mobile = user.mobile;
            order.username = user.username;
          }
        });

        matchedJifens.map((jifen) => {
          console.log(jifen)
          if (order.user_id === jifen.uid){
            order.jifen = jifen.balance;
          }
        })

        matchedBatchs.map((batch) => {
          if (order.batch_id == batch._id){
            order.batch_code = batch.batch_code;
          }
        })

        // newOrders.push(order);
        data.push([order.username, order.mobile, '略...', order.jifen,
          order.amount, order.batch_code, order.order_code, order.sheep_num,
          moment(order.create_time).format('YYYY-MM-DD')]);
      })
      return q.resolve(data);
    })
    .catch(function(err) {
      error = err;
      console.log(err);
    })
    .finally(function(){
      // 定义下载的文件名
      var fileName = "订单统计数据.xlsx";

      console.log('========导出如下数据==========');
      console.log(data);
      var buffer = xlsx.build([
        {name: "订单统计数据", data: data}
      ]);
      // fs.writeFileSync("./statistics/" + fileName, buffer, 'binary');
      fs.writeFileSync( fileName, buffer, 'binary');
      console.log("统计成功");
    });

}

statistics();
