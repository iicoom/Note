### Java 包(package)
为了更好地组织类，Java 提供了包机制，用于区别类名的命名空间。

包的作用
1. 把功能相似或相关的类或接口组织在同一个包中，方便类的查找和使用。

2. 如同文件夹一样，包也采用了树形目录的存储方式。同一个包中的类名字是不同的，不同的包中的类的名字是可以相同的，当同时调用两个不同包中相同类名的类时，应该加上包名加以区别。因此，包可以避免名字冲突。

3. 包也限定了访问权限，拥有包访问权限的类才能访问某个包中的类。

Java 使用包（package）这种机制是为了防止命名冲突，访问控制，提供搜索和定位类（class）、接口、枚举（enumerations）和注释（annotation）等。

## Maven project
> Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.


[Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/#initial)
## Spring Boot
To model the greeting representation, you create a resource representation class. Provide a plain old java object with fields, constructors, and accessors for the id and content data:
创建一个greeting model

src/main/java/hello/Greeting.java

```java
package hello;

public class Greeting {

    private final long id;
    private final String content;

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
```

In Spring’s approach to building RESTful web services, HTTP requests are handled by a controller. These components are easily identified by the @RestController annotation, and the GreetingController below handles GET requests for /greeting by returning a new instance of the Greeting class:

src/main/java/hello/GreetingController.java
```java

package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
```
The @RequestMapping annotation ensures that HTTP requests to /greeting are mapped to the greeting() method.

> 	The above example does not specify GET vs. PUT, POST, and so forth, because @RequestMapping maps all HTTP operations by default. Use @RequestMapping(method=GET) to narrow this mapping.

@RequestParam binds the value of the query string parameter name into the name parameter of the greeting() method. If the name parameter is absent in the request, the defaultValue of "World" is used.

The implementation of the method body creates and returns a new Greeting object with id and content attributes based on the next value from the counter, and formats the given name by using the greeting template.

A key difference between a traditional MVC controller and the RESTful web service controller above is the way that the HTTP response body is created. Rather than relying on a view technology to perform server-side rendering of the greeting data to HTML, this RESTful web service controller simply populates and returns a Greeting object. The object data will be written directly to the HTTP response as JSON.

This code uses Spring 4’s new @RestController annotation, which marks the class as a controller where every method returns a domain object instead of a view. It’s shorthand for @Controller and @ResponseBody rolled together.

The Greeting object must be converted to JSON. Thanks to Spring’s HTTP message converter support, you don’t need to do this conversion manually. Because Jackson 2 is on the classpath, Spring’s MappingJackson2HttpMessageConverter is automatically chosen to convert the Greeting instance to JSON.

### Make the application executable
Although it is possible to package this service as a traditional WAR file for deployment to an external application server, the simpler approach demonstrated below creates a standalone application. You package everything in a single, executable JAR file, driven by a good old Java main() method. Along the way, you use Spring’s support for embedding the Tomcat servlet container as the HTTP runtime, instead of deploying to an external instance.

src/main/java/hello/Application.java

```java
package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```
@SpringBootApplication is a convenience annotation that adds all of the following:
* @Configuration tags the class as a source of bean definitions for the application context.

* @EnableAutoConfiguration tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.

Normally you would add @EnableWebMvc for a Spring MVC app, but Spring Boot adds it automatically when it sees spring-webmvc on the classpath. This flags the application as a web application and activates key behaviors such as setting up a DispatcherServlet.

* @ComponentScan tells Spring to look for other components, configurations, and services in the hello package, allowing it to find the controllers.

The main() method uses Spring Boot’s SpringApplication.run() method to launch an application. Did you notice that there wasn’t a single line of XML? No web.xml file either. This web application is 100% pure Java and you didn’t have to deal with configuring any plumbing or infrastructure.


### Build an executable JAR
You can run the application from the command line with Gradle or Maven. Or you can build a single executable JAR file that contains all the necessary dependencies, classes, and resources, and run that. This makes it easy to ship, version, and deploy the service as an application throughout the development lifecycle, across different environments, and so forth.

If you are using Gradle, you can run the application using ./gradlew bootRun. Or you can build the JAR file using ./gradlew build. Then you can run the JAR file:
```
java -jar build/libs/gs-rest-service-0.1.0.jar
```

If you are using Maven, you can run the application using ./mvnw spring-boot:run. Or you can build the JAR file with ./mvnw clean package. Then you can run the JAR file:
```
java -jar target/gs-rest-service-0.1.0.jar
```

> The procedure above will create a runnable JAR. You can also opt to build a classic WAR file instead.


[Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)
### Create the application.properties file
Spring Boot gives you defaults on all things, the default in database is H2, so when you want to change this and use any other database you must define the connection attributes in the application.properties file.

src/main/resources/application.properties

```
spring.jpa.hibernate.ddl-auto=create
spring.datasource.url=jdbc:mysql://localhost:3306/db_example
spring.datasource.username=springuser
spring.datasource.password=ThePassword
```

Here, spring.jpa.hibernate.ddl-auto can be none, update, create, create-drop, refer to the Hibernate documentation for details.

* none This is the default for MySQL, no change to the database structure.

* update Hibernate changes the database according to the given Entity structures.

* create Creates the database every time, but don’t drop it when close.

* create-drop Creates the database then drops it when the SessionFactory closes.

We here begin with create because we don’t have the database structure yet. After the first run, we could switch it to update or none according to program requirements. Use update when you want to make some change to the database structure.

It is good security practice that after your database is in production state, you make this none and revoke all privileges from the MySQL user connected to the Spring application, then give him only SELECT, UPDATE, INSERT, DELETE.

### Create the @Entity model
src/main/java/hello/User.java

```
package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String email;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


}
```
This is the entity class which Hibernate will automatically translate into a table.

### Create the repository
src/main/java/hello/UserRepository.java
```
package hello;

import org.springframework.data.repository.CrudRepository;

import hello.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Long> {

}
```

This is the repository interface, this will be automatically implemented by Spring in a bean with the same name with changing case The bean name will be userRepository

### Create a new controller for your Spring application
src/main/java/hello/MainController.java

```
package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import hello.User;
import hello.UserRepository;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class MainController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private UserRepository userRepository;

	@GetMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addNewUser (@RequestParam String name
			, @RequestParam String email) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		User n = new User();
		n.setName(name);
		n.setEmail(email);
		userRepository.save(n);
		return "Saved";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
}
```

> The above example does not explicitly specify GET vs. PUT, POST, and so forth, because @GetMapping is a shortcut for @RequestMapping(method=GET). @RequestMapping maps all HTTP operations by default. Use @RequestMapping(method=GET) or other shortcut annotations to narrow this mapping.

### Make the application executable
src/main/java/hello/Application.java

```
package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Build an executable JAR
If you are using Maven, you can run the application using ./mvnw spring-boot:run. Or you can build the JAR file with ./mvnw clean package. Then you can run the JAR file:

java -jar target/gs-accessing-data-mysql-0.1.0.jar


### Make some security changes
Now when you are on production environment, you may be exposed to SQL injection attacks. A hacker may inject DROP TABLE or any other destructive SQL commands. So as a security practice, make those changes to your database before you expose the application to users.

```
mysql> revoke all on db_example.* from 'springuser'@'localhost';
```
This revokes ALL the priviliges from the user associated with the Spring application. Now the Spring application cannot do anything in the database. We don’t want that, so
```
mysql> grant select, insert, delete, update on db_example.* to 'springuser'@'localhost';
```

This gives your Spring application only the privileges necessary to make changes to only the data of the database and not the structure (schema).

Now make this change to your src/main/resources/application.properties
```
spring.jpa.hibernate.ddl-auto=none
```

This is instead of create which was on the first run for Hibernate to create the tables from your entities.

When you want to make changes on the database, regrant the permissions, change the spring.jpa.hibernate.ddl-auto to update, then re-run your applications, then repeat. Or, better, use a dedicated migration tool such as Flyway or Liquibase.

Summary
Congratulations! You’ve just developed a Spring application which is bound to a MySQL database, Ready for production!
