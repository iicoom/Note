var express = require('express');
var app = express();

var formidable = require("formidable");
var xlsx = require('node-xlsx');
var nodeExcel = require('excel-export');

app.post('/importSheep', function (req, res, next) {
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if(!err){
            req.files = files;
        }
        next();
    });
},function(req,res,next) {
    var error;
    var file = req.files.file;
    var batchId = req.query.batchId;
    var sheepArray = [];
    var items;

    try {
        items = xlsx.parse(file.path)[0].data; // parses a file
    } catch (err) {
        return ranchUtil.doResult(res, ranchUtil.generateErr(ErrorCode.Flock_ErrorParams, "请上传excle文件"));
    }
    items.shift(); //推断items就是Excel中的数据数组
    console.log('batchId:',batchId);
    console.log('items 内容:',items);
    res.send({ data: items})
});

app.get('/:batchId/export', function(req, res) {
  var conf = {};
  //  conf.stylesXmlFile = 'styles.xml';
  conf.cols = [{
      caption: '订单编号',
      type: 'string',
      width: 25
  }, {
      caption: '交易流水号',
      type: 'string',
      width: 30
  }, {
      caption: '下单时间',
      type: 'string',
      width: 15
  }, {
      caption: '交易金额',
      type: 'number',
      width: 10
  }, {
      caption: '订单状态',
      type: 'string',
      width: 10
  }, {
      caption: '订单类型',
      type: 'string',
      width: 10
  }, {
      caption: '客户姓名',
      type: 'string',
      width: 10
  }, {
      caption: '身份证号',
      type: 'string',
      width: 25
  }, {
      caption: '联系电话',
      type: 'number',
      width: 15
  }];
  conf.rows = [
    ["20180122163015757","551e45eb6c5ac465b3cf5f0c",1516609815167,1000,"支付完成","nimei","9508","13102419890202072X","13522689508"],
    ["20180122163015757","551e45eb6c5ac465b3cf5f0c",1516609815167,1000,"支付完成","nimei","9508","13102419890202072X","13522689508"]
  ]
 
  var result = nodeExcel.execute(conf);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
  res.end(result, 'binary');

})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

/*
items 内容: [ [ 1,
    3,
    34,
    '4',
    1,
    '无',
    '2018-01-04',
    '2',
    '2018-01-04',
    '',
    '20180122162409238',
    '繁育猪E-1' ],
  [ 2,
    3,
    34,
    '4',
    1,
    '无',
    '2018-01-04',
    '2',
    '2018-01-04',
    '',
    '20180112105015824',
    '繁育猪E-1' ],
  [ 3,
    3,
    34,
    '4',
    1,
    '无',
    '2018-01-04',
    '2',
    '2018-01-04',
    '',
    '20180112112528551',
    '繁育猪E-1' ],
  [ 4,
    3,
    34,
    '4',
    1,
    '无',
    '2018-01-04',
    '2',
    '2018-01-04',
    '',
    '20180112143354855',
    '繁育猪E-1' ],
  [ 5,
    3,
    34,
    '4',
    1,
    '无',
    '2018-01-04',
    '2',
    '2018-01-04',
    '',
    '20180112152250499',
    '繁育猪E-1' ],
  [ 6,
    3,
    34,
    '4',
    1,
    '无',
    '2018-01-04',
    '2',
    '2018-01-04',
    '',
    '20180117143822628',
    '繁育猪E-1' ] ]
  */