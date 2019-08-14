# install&why

➜ ~ sudo npm install -g typescript

➜ ~ tsc -v Version 3.5.3

## 为什么要TypeScript

1. 为JavaScript提供一个可选择的类型检查系统；
2. 为JavaScript提供一个包含将来新特性的版本。

TypeScript的核心价值体现在第一点，第二点可以认为是TypeScript的向后兼容性保证，也是TypeScript必须要做到的。

经过像Google、Microsoft、FaceBook这样的大公司实践表明，类型检查对于代码可维护性和可读性是有非常大的帮助的，尤其针对于需要长期维护的规模性系统。

在JS里，两个等号的判断会进行隐式的类型转换，如：

```text
console.log(5 == "5"); // true 
console.log(0 == "");  // true
```

## 编译 .ts

At the command line, run the TypeScript compiler:

```text
tsc greeter.ts
```

