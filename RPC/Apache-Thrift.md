> Thrift is written in C++, but can create code for a number of languages. To create a Thrift service, one has to write Thrift files that describe it, generate the code in the destination language, write some code to start the server, and call it from the client. Here is a code example of such a description file:
> Thrift是用c++编写的，但是可以为许多语言创建代码。要创建服务，必须编写描述它的文件，生成目标语言代码，编写服务器的代码，并从客户机调用它。下面是这样一个描述文件的代码示例:

```thrift
enum PhoneType {
  HOME,
  WORK,
  MOBILE,
  OTHER
}

struct Phone {
  1: i32 id,
  2: string number,
  3: PhoneType type
}

service PhoneService {
  Phone findById(1: i32 id),
  list<Phone> findAll()
}
```