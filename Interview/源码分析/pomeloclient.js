(function() {
    function EventEmitter() {};

    EventEmitter.prototype.addListener = function(type, listener) {
        if ('function' !== typeof listener) {
            throw new Error('addListener only takes instances of Function');
        }

        if (!this._events) this._events = {};

        if (!this._events[type]) {
            // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        }

        return this;
    }
})()

/**
 * 对 socket.io 的封装
 */
(function() {
    var pomelo = Object.create(EventEmitter.prototype);  // object extend from object

    var socket = null;
    var id = 1;
    pomelo.init = function(params, cb) {
        var host = params.host;
        var port = params.port;

        var url = 'ws://' + host;
        if(port) {
            url +=  ':' + port;
        }

        socket = io(url, {'force new connection': true, reconnect: false});

        socket.on('connect', function() {
            console.log('[pomeloclient.init] websocket connected!');
            if (cb) {
                cb(socket);
            }
        })
    }

    pomelo.request = function(route) {
        if(!route) {
            return;
        }

        var msg = {};
        arguments = Array.prototype.slice.apply(arguments);
        var sg = Protocol.encode(id,route,msg);
        socket.send(sg);
    }
})()

// 再了解一下socket.io 的一些常用方法