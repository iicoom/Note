## 为什么会出现set和get
在面向对象编程(OOP)中，用户只需要知道对象(object)能做什么，而不需要知道其如何完成的，或者说不允许访问其内部，这体现了面向对象的3个基本原则中的封装。
面向对象的基本原则：
- 封装(Encapsulation)
- 多态(Polymorphism)
- 继承(Inheritance)


https://www.tutlane.com/tutorial/csharp/csharp-properties-get-set


As discussed, we can extend the behavior of class variables using properties get and set accessors. Following is the example of extending the behavior of private variable in property using get and set accessors in c# programming language.
我们可以使用get 和 set扩展class的variables行为。

```c#
class User

{

    private string name = "Suresh Dasari";

    public string Name

    {

        get

        {

            return name.ToUpper();

        }

        set

        {

            if (value == "Suresh")

                name = value;

        }

    }

}
```
If you observe the above example, we are extending the behavior of private variable name using a property called Name with get and set accessors by performing some validations like to make sure Name value equals to only “Suresh” using set accessor and converting property text to uppercase with get accessor.
我们使用属性Name的get set扩展了私有变量name的行为。 这个get的行为是name.ToUpper()， set的行为是给name的复制操作加入了校验。

Here the field “name” is marked as private so if you want to make any changes to this field then we can do it only by calling the property (Name).
因为“name”是private，所以只能通过调用Name的方法来改变这个field 的值。

```c#
User u = new User();

u.Name = "Rohini"; // set accessor will invoke

Console.WriteLine(u.Name); // get accessor will invoke
```
输出：SURESH DASARI