var _ = require('lodash');

var vips =
[ 
  { 
    mobile: '15101076675',
    role_type: 3,
    __v: 1,
    portrait_id: 'development/0abc1aef-40bf-4d52-ad24-fca8822c6016',
    nickname: '笑哈哈',
    is_bindwx: true,
    },
  { 
    mobile: '18231088178',
    role_type: 3,
    __v: 0,
    nickname: '182****8178',
    disabled: false,
    experienceValue: 110,
    gradeValue: 1,
  },
  { 
    mobile: '17600534498',
    role_type: 3,
    __v: 0,
    nickname: '176****4498',
    idcard: '120002319871829037',
    username: '张哈哈',
    verify_time: 1522735358399,
   },
  { 
    mobile: '17600658525',
    role_type: 3,
    is_seedling_receive: true,
    __v: 0,
    nickname: '把乖',
    username: '孔问蕊',
} ];

var subMobile = [ '17600000000', '17600534498', '17600658525', '1760065852' ];

// new Promise((resolve, reject) => {
//     console.log('typeof(vips)', typeof(vips))
//     // vips = vips.toJSON();
//     subMobile.map((item, index) => {
//         // console.log('item == vips[2].mobile:', item == vips[2].mobile)
//         vips = _.dropWhile(vips, function(o) { return o.mobile == item; })
//         console.log('vips-forEach'+index , vips)
//     })
//     resolve(vips);
// })
// .then(() => {
//     console.log('vips:', vips)
// })

var newVips = [];
subMobile.forEach(function (mobile) {
        vips.forEach(function (userInfo) {
          if (userInfo.mobile == mobile) {
            userInfo.hasSubmit = '已填写';
            newVips.push(userInfo);
          }
        })
      })

// mongoose 查出的数据 无法添加属性，需要采取下面的方法
// subMobile.forEach(function (mobile) {
//     vips.forEach(function (userInfo) {
//       userInfo = userInfo.toJSON();
//       if (userInfo.mobile == mobile) {
//         userInfo.hasSubmit = '已填写';
//         newVips.push(userInfo);
//       }
//     })
// })
console.log('newVips:', newVips)









