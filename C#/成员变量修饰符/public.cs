class PointTest
{
    public int x;
    public int y;
}

class MainClass4
{
    static void Main()
    {
        var p = new PointTest();
        // Direct access to public members.
        p.x = 10;
        p.y = 15;
        Console.WriteLine($"x = {p.x}, y = {p.y}");
    }
}
// Output: x = 10, y = 15
// 如果将 public 访问级别更改为 private 或 protected，则会收到错误消息：
// “PointTest.y”不可访问，因为它受保护级别限制。