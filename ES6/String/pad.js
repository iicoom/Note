// pad 方法可以在原来的字符串上填充

// 在字符串的开头填充一组字符串，直到字符数达到指定数值
'cat'.padStart(5);         // '  cat'
'cat'.padStart(5, 'a');    // 'aacat'
'cat'.padStart(1, 'a');    // 'cat'   指定长度小于字符串长度，将不会追加字符串
'cat'.padStart(5, 'abc');  // 'abcat' 
'cat'.padStart(8, 'abc');  // 'abcabcat' 如果追加一次没有达到指定长度会追加多次

'cat'.padEnd(5);         // 'cat  '
'cat'.padEnd(5, 'a');    // 'cataa'
'cat'.padEnd(1, 'a');    // 'cat'
'cat'.padEnd(5, 'abc');  // 'catab'
'cat'.padEnd(8, 'abc');  // 'catabcab'

// 我们可以使用 padStart 和 padEnd 方法来简单实现一些格式化的操作。例如：
const data = {
  Portland: '78/50',
  Dublin: '88/52',
  Lima: '58/40'
}

Object.entries(data).map(([city, temp]) => {
  console.log(`City: ${city} Weather: ${temp}`)
});

// 输出如下：
// City: Portland Weather: 78/50
// City: Dublin Weather: 88/52
// City: Lima Weather: 58/40

Object.entries(data).map(([city, temp]) => {
  console.log(`City: ${city.padEnd(16)} Weather: ${temp}`)
});
// City: Portland        Weather: 78/50
// City: Dublin          Weather: 88/52
// City: Lima            Weather: 58/40