const Qs = require('qs');
let url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
Qs.parse(url);
console.log(Qs.parse(url));
// =>
/*
{ method: 'query_sql_dataset_data',
  projectId: '85',
  appToken: '7d22e38e-5717-11e7-907b-a6006ad3dba0' }
*/

let obj= {
     method: "query_sql_dataset_data",
     projectId: "85",
     appToken: "7d22e38e-5717-11e7-907b-a6006ad3dba0",
     datasetId: " 12564701",
     password: '',
     user_id: undefined
   };

Qs.stringify(obj);
console.log(Qs.stringify(obj));
// =>
/*
method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0
&datasetId=%2012564701&password=
*/

console.log('JSON.stringify(obj)')
const URL = JSON.stringify(obj)
console.log(JSON.stringify(obj))
// =>
/*
{"method":"query_sql_dataset_data","projectId":"85","appToken":"7d22e38e-5717-11e7-907b-a6006ad3dba0","datasetId":" 12564701","password":""}
*/ 

console.log(JSON.parse(URL))
/*
{ method: 'query_sql_dataset_data',
  projectId: '85',
  appToken: '7d22e38e-5717-11e7-907b-a6006ad3dba0',
  datasetId: ' 12564701',
  password: '' }
 */
