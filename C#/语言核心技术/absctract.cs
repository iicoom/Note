// In this example, the class Square must provide an implementation of GetArea because it derives from Shape:

abstract class Shape
{
    public abstract int GetArea();
}

class Square : Shape
{
    int side;

    public Square(int n) => side = n;

    // GetArea method is required to avoid a compile-time error.
    public override int GetArea() => side * side;

    static void Main()
    {
        var sq = new Square(12);
        Console.WriteLine($"Area of the square = {sq.GetArea()}");
    }
}
// Output: Area of the square = 144


// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract
/*
- An abstract class cannot be instantiated.

- An abstract class may contain abstract methods and accessors.

- It is not possible to modify an abstract class with the sealed modifier because the two modifiers have opposite meanings. The sealed modifier prevents a class from being inherited and the abstract modifier requires a class to be inherited.

- A non-abstract class derived from an abstract class must include actual implementations of all inherited abstract methods and accessors.
*/