> Apache JMeter™ [guangwang](https://jmeter.apache.org/)
The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.

What can I do with it?
Apache JMeter may be used to test performance both on static and dynamic resources, Web dynamic applications. 
It can be used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load types.
Apache JMeter features include:

Ability to load and performance test many different applications/server/protocol types:
* Web - HTTP, HTTPS (Java, NodeJS, PHP, ASP.NET, …)
* SOAP / REST Webservices
* FTP
* Database via JDBC
* LDAP
* Message-oriented middleware (MOM) via JMS
* Mail - SMTP(S), POP3(S) and IMAP(S)
* Native commands or shell scripts
* TCP
* Java Objects

### Running JMeter
To run JMeter, run the jmeter.bat (for Windows) or jmeter (for Unix) file. These files are found in the bin directory. After a short time, the JMeter GUI should appear.
```
GUI mode should only be used for creating the test script, NON GUI mode must be used for load testing
```

### apache-jmeter-4.0 安装目录在 下载
Readme.md有详细介绍
#### Running JMeter
1. Change to the `bin` directory
2. Run the `jmeter` (Un\*x) or `jmeter.bat` (Windows) file.

####  Elements of a Test Plan
3.0 Test Plan
The Test Plan object has a checkbox called "Functional Testing". If selected, it will cause JMeter to record the data returned from the server for each sample.
The consequence is that the file will grow huge quickly, and JMeter's performance will suffer. This option should be off if you are doing stress-testing (it is off by default).

3.1 Thread Group
Thread group elements are the beginning points of any test plan. All controllers and samplers must be under a thread group.
As the name implies, the thread group element controls the number of threads JMeter will use to execute your test. The controls for a thread group allow you to:
* Set the number of threads
* Set the ramp-up period
* Set the number of times to execute the test

Each thread will execute the test plan in its entirety and completely independently of other test threads. Multiple threads are used to simulate concurrent connections to your server application.

3.2 Controllers
JMeter has two types of Controllers: Samplers and Logical Controllers. These drive the processing of a test.

3.2.1 Samplers
Samplers tell JMeter to send requests to a server and wait for a response. They are processed in the order they appear in the tree. Controllers can be used to modify the number of repetitions of a sampler.

JMeter samplers include:

FTP Request
HTTP Request (can be used for SOAP or REST Webservice also)
JDBC Request
Java object request
JMS request
JUnit Test request
LDAP Request
Mail request
OS Process request
TCP request

3.2.2 Logic Controllers
Logic Controllers let you customize the logic that JMeter uses to decide when to send requests. Logic Controllers can change the order of requests coming from their child elements. They can modify the requests themselves, cause JMeter to repeat requests, etc.

#### Test plan building 制定test plan
https://jmeter.apache.org/usermanual/get-started.html
To do that, you will run JMeter in GUI Mode. 

can use for that the menu File → Templates... → Recording  -create





