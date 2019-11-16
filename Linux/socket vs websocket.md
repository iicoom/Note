<!-- https://www.tutorialspoint.com/unix_sockets/what_is_socket.htm -->
## Socket
### What is a Socket?
Sockets allow communication between two different processes on the same or different machines. To be more precise, it's a way to talk to other computers using standard Unix file descriptors. In Unix, every I/O action is done by writing or reading a file descriptor. A file descriptor is just an integer associated with an open file and it can be a network connection, a text file, a terminal, or something else.

Sockets 用于在同一主机或者不同主机的2个不同进程间的通信。更精确的说，使用中使用标准Unix文件描述符来与其他计算机通信的方式。
在Unix系统中，每一个I/O操作都是通过读写文件描述符来完成。
文件描述符就是一个与打开文件或者网络连接或者其他东西关联的整形数值。

### Socket Types
There are four types of sockets available to the users. The first two are most commonly used and the last two are rarely used.

- Stream Sockets − Delivery in a networked environment is guaranteed. If you send through the stream socket three items "A, B, C", they will arrive in the same order − "A, B, C". These sockets use TCP (Transmission Control Protocol) for data transmission. If delivery is impossible, the sender receives an error indicator. Data records do not have any boundaries.

- Datagram Sockets − Delivery in a networked environment is not guaranteed. They're connectionless because you don't need to have an open connection as in Stream Sockets − you build a packet with the destination information and send it out. They use UDP (User Datagram Protocol).

- Raw Sockets − These provide users access to the underlying communication protocols, which support socket abstractions. These sockets are normally datagram oriented, though their exact characteristics are dependent on the interface provided by the protocol. Raw sockets are not intended for the general user; they have been provided mainly for those interested in developing new communication protocols, or for gaining access to some of the more cryptic facilities of an existing protocol.

- Sequenced Packet Sockets − They are similar to a stream socket, with the exception that record boundaries are preserved. This interface is provided only as a part of the Network Systems (NS) socket abstraction, and is very important in most serious NS applications. Sequenced-packet sockets allow the user to manipulate the Sequence Packet Protocol (SPP) or Internet Datagram Protocol (IDP) headers on a packet or a group of packets, either by writing a prototype header along with whatever data is to be sent, or by specifying a default header to be used with all outgoing data, and allows the user to receive the headers on incoming packets.

## HTML5 - WebSockets
https://www.tutorialspoint.com/html5/html5_websocket.htm

WebSockets is a next-generation bidirectional communication technology for web applications which operates over a single socket and is exposed via a JavaScript interface in HTML 5 compliant browsers.

Once you get a Web Socket connection with the web server, you can send data from browser to server by calling a send() method, and receive data from server to browser by an onmessage event handler.

Following is the API which creates a new WebSocket object.

WebSockets 是新一代Web应用通信技术，可以双向通信运行于单独的socket，通过HTML5 提供接口。

一旦通过web server建立一个Web Socket连接，就可以调用send方法从浏览器向服务器发送数据，服务器通过onmessage事件监听来接收浏览器发送的数据。

<!-- Following is the API which creates a new WebSocket object. -->
```
var Socket = new WebSocket(url, [protocal] );
```
Here first argument, url, specifies the URL to which to connect. The second attribute, protocol is optional, and if present, specifies a sub-protocol that the server must support for the connection to be successful.

url指定要连接的服务器，第二个属性可选，指定服务器支持的协议确保连接可以成功建立。

```
<!DOCTYPE HTML>

<html>
   <head>
      
      <script type = "text/javascript">
         function WebSocketTest() {
            
            if ("WebSocket" in window) {
               alert("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://localhost:9998/echo");
				
               ws.onopen = function() {
                  
                  // Web Socket is connected, send data using send()
                  ws.send("Message to send");
                  alert("Message is sent...");
               };
				
               ws.onmessage = function (evt) { 
                  var received_msg = evt.data;
                  alert("Message is received...");
               };
				
               ws.onclose = function() { 
                  
                  // websocket is closed.
                  alert("Connection is closed..."); 
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         }
      </script>
		
   </head>
   
   <body>
      <div id = "sse">
         <a href = "javascript:WebSocketTest()">Run WebSocket</a>
      </div>
      
   </body>
</html>
```
