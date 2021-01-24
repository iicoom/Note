> The following shows how map two objects using MapStruct.

Let's assume we have a class representing cars (e.g. a JPA entity) and an accompanying data transfer object (DTO).

```java
// Car.java
public class Car {
 
    private String make;
    private int numberOfSeats;
    private CarType type;
 
    //constructor, getters, setters etc.
}


// CarDto.java
public class CarDto {
 
    private String make;
    private int seatCount;
    private String type;
 
    //constructor, getters, setters etc.
}
```
Both types are rather similar, only the seat count attributes have different names and the type attribute is of a special enum type in the Car class but is a plain string in the DTO.
这两种类型非常相似，只有seat count属性有不同的名称，type属性在Car类中是特殊的enum类型，但在DTO中是普通字符串。

To generate a mapper for creating a CarDto object out of a Car object, a mapper interface needs to be defined:
为了从Car对象中生成一个mapper来创建CarDto对象，需要定义一个mapper接口:
```java
@Mapper 1
public interface CarMapper {
 
    CarMapper INSTANCE = Mappers.getMapper( CarMapper.class ); 3
 
    @Mapping(source = "numberOfSeats", target = "seatCount")
    CarDto carToCarDto(Car car); 2
}
```
The @Mapper annotation 1 marks the interface as mapping interface and lets the MapStruct processor kick in during compilation.

The actual mapping method 2 expects the source object as parameter and returns the target object. Its name can be freely chosen.

An instance of the interface implementation can be retrieved from the Mappers class. By convention, the interface declares a member INSTANCE 3, providing clients access to the mapper implementation.


https://mapstruct.org/