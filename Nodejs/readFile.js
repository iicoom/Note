var fs = require('fs');
var path = require('path');


var movieDir = path.join(__dirname + '/movies/passwd');
var moviesDir = path.join(__dirname + '/movies');

fs.readFile(movieDir,'utf8',(err, data) => {
	if (err) throw err;
	console.log(data);
})

// 不指定编码方式将返回原生<Buffer 61 64 6d 69 6e 69 73 74 72 61 74 6f 72>

/*fs.writeFile(path.join(__dirname+ '/movies/message.txt'), 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});*/

fs
	.readdirSync(moviesDir)
	.forEach(function(file){
		console.log(file)
	})

