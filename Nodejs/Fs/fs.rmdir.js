var fs = require('fs');
fs.rmdir('deldir', function(err){
 if(err){
  console.log(err);
 }else{
  console.log("done");
 }
});