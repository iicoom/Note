// 在此示例中，Employee 类包含两个私有数据成员 name 和 salary。 作为私有成员，它们只能通过成员方法来访问。
//  添加名为 GetName 和 Salary 的公共方法，以便可以对私有成员进行受控的访问。 
// 通过公共方法访问 name 成员，而通过公共只读属性访问 salary 成员。

class Employee2
{
    private string name = "FirstName, LastName";
    private double salary = 100.0;

    public string GetName()
    {
        return name;
    }

    public double Salary
    {
        get { return salary; }
    }
}

class PrivateTest
{
    static void Main()
    {
        var e = new Employee2();

        // The data members are inaccessible (private), so
        // they can't be accessed like this:
        //    string n = e.name;
        //    double s = e.salary;

        // 'name' is indirectly accessed via method:
        string n = e.GetName();

        // 'salary' is indirectly accessed via property
        double s = e.Salary;
    }
}