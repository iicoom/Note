var express = require('express');
var app = express();

var formidable = require("formidable");
var xlsx = require('node-xlsx');

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