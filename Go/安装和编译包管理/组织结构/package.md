[golang之package](https://studygolang.com/articles/5831)

## package的作用
√ package是golang最基本的分发单位和工程管理中依赖关系的体现。

√ 每个golang源代码文件开头都拥有一个package声明，表示该golang代码所属的package。

√ 要生成golang可执行程序，必须建立一个名为main的package，并且在该package中必须包含一个名为main()的函数。

√ 在golang工程中，同一个路径下只能存在一个package，一个package可以拆成多个源文件组成。

