let net = require('net');

net.createServer(function(socket) {
    console.info('tcp client connected');

    socket.on('data', function(data) {

    }); 

    socket.on('end', function() {
        console.info('client disconnected');
    }); 
}).listen(7002);