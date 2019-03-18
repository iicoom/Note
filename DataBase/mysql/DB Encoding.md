## mysql中utf8和utf8mb4区别
MySQL在5.5.3之后增加了这个utf8mb4的编码，mb4就是most bytes 4的意思，专门用来兼容四字节的unicode。
好在utf8mb4是utf8的超集，除了将编码改为utf8mb4外不需要做其他转换。
当然，为了节省空间，一般情况下使用utf8也就够了。

那上面说了既然utf8能够存下大部分中文汉字,那为什么还要使用utf8mb4呢? 原来mysql支持的 utf8 编码最大字符长度为 3 字节，如果遇到 4 字节的宽字符就会插入异常了。三个字节的 UTF-8 最大能编码的 Unicode 字符是 0xffff，也就是 Unicode 中的基本多文种平面(BMP)。也就是说，任何不在基本多文本平面的 Unicode字符，都无法使用 Mysql 的 utf8 字符集存储。包括 Emoji 表情(Emoji 是一种特殊的 Unicode 编码，常见于 ios 和 android 手机上)，和很多不常用的汉字，以及任何新增的 Unicode 字符等等。

## MySQL中character set与collation的理解（转）
https://www.cnblogs.com/EasonJim/p/8128196.html
collation即比对方法

用于指定数据集如何排序，以及字符串的比对规则。

collation即比对方法

用于指定数据集如何排序，以及字符串的比对规则。