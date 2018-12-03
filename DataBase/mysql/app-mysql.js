const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'nodejs'
  // port: 3306
});
 
connection.connect();

// CRUD
const insertSQL = 'insert into user (name) values("Bolt 他爹")';
const selectSQL = 'select * from user limit 10';
const deleteSQL = 'delete from user where id=4';
const updateSQL = 'update user set name="Bolt 他爹 update"  where name="Bolt 他爹"';

// connection.query('INSERT INTO user (name) VALUES ("JACK MAR")');
// connection.query(insertSQL, function(err, res){
// 	if (err) { console.log(err)};
// 	console.log("INSERT Return ==> ");
//     console.log(res);
// })
/*
INSERT Return ==>
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 2,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
*/

// connection.query(selectSQL, function(err, rows){
// 	if (err) { console.log(err)};
// 	console.log("SELECT ==> ");
//     for (var i in rows) {
//         console.log(rows[i]);
//     }
// })
/*
SELECT ==>
RowDataPacket { id: 1, name: 'JACK MAR', create_date: 2018-03-26T06:53:55.000Z }
RowDataPacket { id: 2, name: 'Bolt', create_date: 2018-03-26T08:06:45.000Z }
RowDataPacket { id: 3, name: 'Bolt 他爹', create_date: 2018-03-26T08:12:40.000Z }
RowDataPacket { id: 4, name: 'Bolt 他爹', create_date: 2018-03-26T08:13:20.000Z }
*/

// connection.query(updateSQL, function(err, res3){
// 	if (err) { console.log(err)};
//     console.log("UPDATE Return ==> ");
//     console.log(res3);
// })
/*
UPDATE Return ==>
OkPacket {
  fieldCount: 0,
  affectedRows: 2,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '(Rows matched: 2  Changed: 2  Warnings: 0',
  protocol41: true,
  changedRows: 2 }
*/

connection.query(deleteSQL, function(err, res3){
	if (err) { console.log(err)};
    console.log("DELETE Return ==> ");
    console.log(res3);
})
/*
DELETE Return ==>
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
*/

connection.end();


/*************************************************************************/

// 原场景中，对数据串行操作，增删改查(CRUD)，代码如下：
/*
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});
conn.connect();

var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
var selectSQL = 'select * from t_user limit 10';
var deleteSQL = 'delete from t_user';
var updateSQL = 'update t_user set name="conan update"  where name="conan"';

//delete
conn.query(deleteSQL, function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);

    //insert
    conn.query(insertSQL, function (err1, res1) {
        if (err1) console.log(err1);
        console.log("INSERT Return ==> ");
        console.log(res1);

        //query
        conn.query(selectSQL, function (err2, rows) {
            if (err2) console.log(err2);

            console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }

            //update
            conn.query(updateSQL, function (err3, res3) {
                if (err3) console.log(err3);
                console.log("UPDATE Return ==> ");
                console.log(res3);

                //query
                conn.query(selectSQL, function (err4, rows2) {
                    if (err4) console.log(err4);

                    console.log("SELECT ==> ");
                    for (var i in rows2) {
                        console.log(rows2[i]);
                    }
                });
            });
        });
    });
});

conn.end();
*/

var mysql = require('mysql');
var async = require('async');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});

var sqls = {
    'insertSQL': 'insert into t_user(name) values("conan"),("fens.me")',
    'selectSQL': 'select * from t_user limit 10',
    'deleteSQL': 'delete from t_user',
    'updateSQL': 'update t_user set name="conan update"  where name="conan"'
};

var tasks = ['deleteSQL', 'insertSQL', 'selectSQL', 'updateSQL', 'selectSQL'];
async.eachSeries(tasks, function (item, callback) {
    console.log(item + " ==> " + sqls[item]);
    conn.query(sqls[item], function (err, res) {
        console.log(res);
        callback(err, res);
    });
}, function (err) {
    console.log("err: " + err);
});

/*
Async提供了大约20个函数，包括常用的 map, reduce, filter, forEach 等，
异步流程控制模式包括，串行(series)，并行(parallel)，瀑布(waterfall)等。
项目地址：https://github.com/caolan/async
*/