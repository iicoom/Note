/*
indexOf只匹配到第一个合适的，把位置返回给你。

lastIndexOf是匹配最后一个合适的，把位置返回给你。
位置从0开始算的
*/

'hillj'.indexOf('h')
// => 0
'hillj'.indexOf('')
// => 0
'hillj'.indexOf('k')
// => -1

'sad.sad.dsd.'.lastIndexOf('.')
11
'sad.sad.dsd.'.indexOf('.')
3

'file.dsfa.txt'.slice('file.dsfa.txt'.lastIndexOf('.'))
".txt"