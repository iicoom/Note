
/*************************
    Math.random() 
    ***************************/
Math.random()
0.2251550709721022
Math.random().toString(35)
"0.budakyh3lb9"
Math.random().toString(35).substr(2, 7)
"v028hh0"
"0.budakyh3lb9".substr(2, 7)
"budakyh"

toString() radix argument must be between 2 and 36

Math.random().toString(2)
"0.1010101011100010011101111100010100110110000101101011"
Math.random().toString(6)
"0.0344111523102114403412"
Math.random().toString(8)
"0.52476751434366465"

Math.random()
// 0-1
Math.random()*6  // 0-6
//3.1832189209607633

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

/*************************
    Math.pow(base, exponent) 
    ***************************/
// Math.pow(base, exponent) 
// base
// 基数
// exponent
// 指数

Math.pow(2,3)
// 8


/*************************
    Math.round() 
    ***************************/
// round() 方法可把一个数字舍入为最接近的整数。
Math.round(3.14)
// 3

Math.round(3.6)
//4
Math.round(-3.6)
//-4


/*************************
    Math.ceil()   Math.floor()
    ***************************/

Math.ceil(3.14)
4
Math.ceil(-3.14)
-3
Math.floor(-3.14)
-4
Math.floor(3.14)
3


/*************************
    Math.abs()
    ***************************/

var lineIndex = Math.abs(hashCode('' + mobile)) % orderLineNum;

