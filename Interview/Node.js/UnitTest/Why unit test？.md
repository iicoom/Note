代码部署之前，进行一定的单元测试是十分必要的，这样能够有效并且持续保证代码质量。而实践表明，高质量的单元测试还可以帮助我们完善自己的代码。

https://blog.fundebug.com/2017/03/20/nodejs-unit-test/

为啥需要单元测试？

所谓单元测试，就是对某个函数或者API进行正确性验证。来看个简单的例子add1.js:
```
function add(a, b)
{
    return a + b;
}
```

没错，我写了一个加法函数。这有啥好测的呢？不妨用node执行一下:
```
> add = function(a, b){return a + b}
[Function: add]
> add(4)
NaN
```

你考虑过只有一个参数的场景吗？
给定一个参数时，NaN是你想要的结果吗？
如果参数不是整数怎么办？

这时，就需要单元测试来验证各种可能的场景了。

如果我把add函数定义为两个整数相加，而其他输入则返回undefined，那么正确的代码add2.js应该是这样的:
```
function add(a, b)
{
    if (typeof a === "number" && typeof b === "number")
    {
        return a + b;
    }
    else
    {
        return undefined;
    }

}
```
发现一个有趣的现象，我们写代码的时候很容易陷入思维漏洞，而写测试的时候往往会考虑各种情况，这就是所谓的TDD（Test-Driven-Development: 测试驱动开发）的神奇之处。因此，进行一定的单元测试是十分必要的:

验证代码的正确性
避免修改代码时出错
避免其他团队成员修改代码时出错
便于自动化测试与部署