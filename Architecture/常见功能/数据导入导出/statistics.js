var xlsx = require('node-xlsx');
var fs = require('fs');

function statistics() {
    console.log("每日统计开始");
    var result = {};
    var error;

    //定义下载的文件名（每天统计数据 年月日.xlsx）
    var fileName = "每天统计数据.xlsx";

    var data = [
        ['日期',
            '当天新注册人数', '新注册并购买人数', '新注册购买金额',
            '累计注册人数', '累计注册并购买人数', '累计购买金额',
            '当天新注册被邀请人数', '当天新注册被邀请并购买人数', '当天新注册被邀请并购买金额',
            '累计注册被邀请人数', '累计注册被邀请并购买人数', '累计注册被邀请并购买金额',
            '当天赠送红包人数', '当天赠送红包金额', '当天接受红包赠送成功人数', '当天接受红包赠送成功金额',
            '累计赠送红包人数', '累计赠送红包金额', '累计接受红包赠送成功人数', '累计接受红包赠送成功金额']
    ];
    var item = [new Date(),
        4, 5, 6,
        result.user_count, result.buy_user_count, result.buy_amount,
        result.new_recommend_user_count, result.new_recommend_buy_user_count, result.new_recommend_buy_amount,
        result.recommend_user_count, result.recommend_buy_user_count, result.recommend_buy_amount,
        result.new_send_user_count, result.new_send_amount, result.new_reveive_user_count, result.new_reveive_amount,
        result.send_user_count, result.send_amount, result.reveive_user_count, result.reveive_amount];
    data.push(item);
    var buffer = xlsx.build([
        {name: "每天统计数据", data: data}
    ]);
    fs.writeFileSync(fileName, buffer, 'binary');
    console.log("统计成功");
}

statistics();