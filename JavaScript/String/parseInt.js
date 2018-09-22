//parseInt(string, radix);
parseInt(83 + Math.random() * 6)
// 85

//parseFloat() 函数可解析一个字符串，并返回一个浮点数。
parseFloat('-123.5')
//-123.5

parseFloat('He was 40')
//NaN
parseFloat('40 years')
//40
parseFloat('34 45 66')
//34
parseFloat('10.33')
//10.33
parseFloat('10.33').toFixed(1)
//"10.3"