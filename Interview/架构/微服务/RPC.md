## What is RPC?
Stands for "Remote Procedure Call." Most computer programs run procedures, or sets of instructions, using the computer's CPU. In other words, the instructions are processed locally on the same computer that the software is running from. Remote procedure calls, however, run procedures on other machines or devices connected to a network. Once the instructions have been run, the results of the procedure are usually returned to the local computer.

远程程序调用

大多数计算机运行的程序都是在本地，远程程序调用指的是通过网络连接在其他设备上运行程序，通常把运行结果再返回到本地。

### gRpC
https://grpc.io/docs/guides/

- gRPC and protocol buffers
gRPC can use protocol buffers as both its Interface Definition Language (IDL) and as its underlying message interchange format. 
gRPC 能使用protocol buffers 作为它的接口定义语言和信息交换格式。

In gRPC a client application can directly call methods on a server application on a different machine as if it was a local object, making it easier for you to create distributed applications and services. 
在gRPC客户端应用程序中可以直接调用不同机器上的服务器端应用，使得创建分布式应用和服务变得简单。

#### Protocol Buffers


[Building gRPC Service Server Note CRUD API with node.js](https://medium.com/@alfianlosari/building-grpc-service-server-note-crud-api-with-node-js-bcc5478d5bdb)
## Node.js
gRPC is a remote procedure call framework developed by Google that has been gaining interests among many software developers that were developing microservices in recent years because its open source, language neutral, compact binary size, HTTP/2 support, and cross platform compatibility

gRPC 是一个由Google开发的远程调用的框架，最近几年引起了微服务开发者的兴趣。它是开源，跨语言，支持HTTP/2,跨平台。


It lets you define a service using Protocol Buffers, a particularly powerful binary serialization toolset and language. 

它使用Protocol Buffers 定义服务，是一个功能强大的二进制序列化工具。

### Create NPM Project and Add Dependencies
```
npm install --save grpc
npm install --save uuid
```

### Declaring Proto File and Note Message
Inside the project directory, create new file called notes.proto. This is the file where we declare our Protocol Buffer Message and gRPC Service. 

notes.proto
```
syntax = "proto3";
message Note {
    string id = 1;
    string title = 2;
    string content = 3;
}
```

### Implement and Run gRPC Server Locally
Next, we want to implement our node.js gRPC Server. Create a new file called index.js which will be the main entry point of our application. 
```js
const grpc = require('grpc')
const notesProto = grpc.load('notes.proto')
const server = new grpc.Server()
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()
```
Try to run the app by executing node index.js. The shell should print out the text server running at our localhost port to the console.

### Create Our List RPC method to Fetch Notes
The first RPC method that we will create for our NoteService is the List method.

notes.proto
```
syntax = "proto3";

service NoteService {
    rpc List (Empty) returns (NoteList) {}
}

message Empty {}

message Note {
   string id = 1;
   string title = 2;
   string content = 3;
}

message NoteList {
   repeated Note notes = 1;
}
```

Then we need to add NoteService to our gRPC server inside the index.js file. 
```js
const grpc = require('grpc')
const notesProto = grpc.load('notes.proto')
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]
const server = new grpc.Server()
server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
})
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()
```

### Create gRPC Client to call our List gRPC Service Method
client.js
```js
const grpc = require('grpc')
const PROTO_PATH = './notes.proto'
const NoteService = grpc.load(PROTO_PATH).NoteService
const client = new NoteService('localhost:50051',
    grpc.credentials.createInsecure())
module.exports = client
```

get_notes.js
```js
const client = require('./client')
client.list({}, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(notes)
    } else {
        console.error(error)
    }
})
```