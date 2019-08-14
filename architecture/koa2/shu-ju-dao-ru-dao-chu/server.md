# 服务端解析

```text
var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if(!err){
            req.files = files;
        }
        next();
    });

// 进入下一个中间件
function(req,res,next) {
    var file = req.files.file;
    var batchId = req.query.batchId;
    var items;

    try {
        items = xlsx.parse(file.path)[0].data; // parses a file
        console.log(items)
    } catch (err) {
        return ranchUtil.doResult(res, ranchUtil.generateErr(ErrorCode.Flock_ErrorParams, "请上传excle文件"));
    }
    items.shift(); // 去掉数组中的表头
    console.log(' items.shift();')
    console.log(items)
}
```

\[ \[ '羊的编号', '羊的年龄', '入栏体重', '浮动体重', '性别（1,2）', '备注', '入栏日期（日期格式必须是yyyy-mm-dd）', '是否怀孕（1,2）', '出生日期（日期格式必须是yyyy-mm-dd）', '来源', '订单编号', '羊舍名称' \], \[ 201, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901143255187', '丰草B-1' \], \[ 202, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901143314628', '丰草B-1' \], \[ 203, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901140937129', '丰草B-1' \], \[ 204, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901124438913', '丰草B-1' \], \[ 205, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901114441559', '丰草B-1' \], \[ 206, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901125404996', '丰草B-1' \], \[ 207, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901135746684', '丰草B-1' \] \]

items.shift\(\); \[ \[ 201, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901143255187', '丰草B-1' \], \[ 202, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901143314628', '丰草B-1' \], \[ 203, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901140937129', '丰草B-1' \], \[ 204, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901124438913', '丰草B-1' \], \[ 205, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901114441559', '丰草B-1' \], \[ 206, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901125404996', '丰草B-1' \], \[ 207, 1, 2, 3, 2, 'wu', '2017-06-02', 2, '2016-2-7', 'wu', '20170901135746684', '丰草B-1' \] \]

会把上面数据处理成 sheepArray \[ { code: '201', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901143255187', house\_name: '丰草B-1', sheep\_status: 1 }, { code: '202', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901143314628', house\_name: '丰草B-1', sheep\_status: 1 }, { code: '203', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901140937129', house\_name: '丰草B-1', sheep\_status: 1 }, { code: '204', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901124438913', house\_name: '丰草B-1', sheep\_status: 1 }, { code: '205', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901114441559', house\_name: '丰草B-1', sheep\_status: 1 }, { code: '206', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901125404996', house\_name: '丰草B-1', sheep\_status: 1 }, { code: '207', age: '1', lairage\_weight: '2', weight\_floated: '3', gender: '2', destription: 'wu', is\_preg: '2', birthday\_time: 1454774400000, source: 'wu', lairage\_time: 1496332800000, order\_code: '20170901135746684', house\_name: '丰草B-1', sheep\_status: 1 } \]

