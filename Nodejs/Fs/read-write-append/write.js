/**
 * 有buffer和str 的2种方式写入
 * fs.write(fd, buffer, offset, length, position, callback)
 * fs.write(fd, string, position, encoding, callback)
 * 第一个参数fd 就是文件描述符 需要在fs.open方法的回调函数中获得
 */
const fs=require("fs"); 
const path = require('path');

/**
 * 1. buffer
 * 
// Declare a buffer and write the 
// data in the buffer 
let buffer = new Buffer.from('\nGeeksforGeeks: '
		+ 'A computer science portal for geeks'); 
		
// The fs.open() method takes a "flag" 
// as the second argument. If the file 
// does not exist, an empty file is 
// created. 'a' stands for append mode 
// which means that if the program is 
// run multiple time data will be 
// appended to the output file instead 
// of overwriting the existing data. 
fs.open(path.resolve(__dirname, '../config/config.txt'), 'a', function(err, fd) { 
  
	// If the output file does not exists 
	// an error is thrown else data in the 
	// buffer is written to the output file 
	if(err) { 
			console.log('Cant open file'); 
	}else { 
			fs.write(fd, buffer, 0, buffer.length,  
							null, function(err,writtenbytes) { 
					if(err) { 
							console.log('Cant write to file'); 
					}else { 
							console.log(writtenbytes + 
									' characters added to file'); 
					} 
			}) 
	} 
}) 
 */

/**
 * 2. str
 */
const str = "\nHello world"; 
   
fs.open(path.resolve(__dirname, '../config/config.txt'), "a", (err, fd)=>{ 
    if(err){ 
        console.log(err.message); 
    }else{ 
        fs.write(fd, str, (err, bytes)=>{ 
            if(err){ 
                console.log(err.message); 
            }else{ 
                console.log(bytes +' bytes written'); 
            } 
        })         
    } 
}) 