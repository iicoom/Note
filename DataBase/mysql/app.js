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