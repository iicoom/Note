/*
js按照配置的概率生成，概率规则如下：
1------------50%

2------------30%

3------------15%

5------------5%
*/

function prizeRand(oArr) {
    var sum = 0;    // 总和
    var rand = 0;   // 每次循环产生的随机数
    var result = 0; // 返回的对象的key

    // console.log(oArr);

    // 计算总和
    for (var i in oArr) {
        sum += oArr[i][0];
        // console.log(i)      // 1,2,3,5
    }

    // 思路就是如果设置的数落在随机数内，则返回，否则减去本次的数
    for (var i in oArr) {
        rand = Math.floor(Math.random()*sum + 1);
        if (oArr[i][0] >= rand) {
            result = oArr[i][1];
            break;
        } else {
            sum -= oArr[i][0];
        }
    }

    return result;

}

var oArr = {'5':[5, 'Mac'], '4':[0, 'iPhoneX'], '3':[15, 'iPhone'], '2':[30, 'iPad'], '1':[50, 'iWatch']};
var prizeArr = {
    '1':[0, '小米MIX3'],
    '2':[0.1, '科沃斯扫地机器人'],
    '3':[0.2, 'Beats头戴式耳机'],
    '4':[0.3, '飞利浦电动剃须刀'],
    '5':[0.4, '会员3选一'],
    '6':[8.5, '京东E卡'],
    '7':[0.5, '50云币'],
    '8':[90, '5云币'],
  };

// console.log(prizeRand(oArr));

for (var i = 0; i <= 1000; i++) {
    console.log(prizeRand(prizeArr));
}



