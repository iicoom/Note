> Protocol Buffers (Protobuf) is a method of serializing structured data. It is useful in developing programs to communicate with each other over a wire or for storing data. The method involves an interface description language that describes the structure of some data and a program that generates source code from that description for generating or parsing a stream of bytes that represents the structured data.
> (Protobuf)是一种序列化结构化数据的方法。服务之间彼此通信或存储数据使用它会很有用。该方法包括描述某些数据结构的 接口描述语言 和从该描述生成源代码的程序，用于生成或解析表示结构化数据的字节流。

Google developed Protocol Buffers for internal use and provided a code generator for multiple languages under an open source license (see below).

The design goals for Protocol Buffers emphasized simplicity and performance. In particular, it was designed to be smaller and faster than XML.

The method serves as a basis for a custom remote procedure call (RPC) system that is used for nearly all inter-machine communication at Google
该方法作为自定义远程过程调用(RPC)系统的基础，该系统用于谷歌上几乎所有的计算机间通信

Protocol Buffers are similar to the Apache Thrift (used by Facebook) or Microsoft Bond protocols, offering as well a concrete RPC protocol stack to use for defined services called gRPC
Protocol Buffers似于Apache Thrift (Facebook使用的)或Microsoft Bond协议，提供了一个具体的RPC协议栈，用于被定义服务 称作gRPC

Data structures (called messages) and services are described in a proto definition file (.proto) and compiled with protoc. 

A schema for a particular use of protocol buffers associates data types with field names, using integers to identify each field. 
```proto
//polyline.proto
syntax = "proto2";

message Point {
  required int32 x = 1;
  required int32 y = 2;
  optional string label = 3;
}

message Line {
  required Point start = 1;
  required Point end = 2;
  optional string label = 3;
}

message Polyline {
  repeated Point point = 1;
  optional string label = 2;
}
```