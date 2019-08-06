// Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
  static triple(n) {
    // 把BiggerTriple.triple(3)接到的参数n 提供给Triple使用
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(BiggerTriple.triple(3));
// var tp = new Triple();
// ChromeSamples.log(tp.triple()); tp.triple is not a function
// =>
// 3
// 18
// 81