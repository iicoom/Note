/**
 * while 
 */
var i = 0;
while (i<5)
{
    console.log("The number is " + i);
    i++;
}
console.log("final i:", i)

// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// final i: 5

/**
 * do while
 * 循环至少执行一次，即便条件为 false，因为代码块是在条件语句判断前执行：
 */
var text = ""
var i = 0;
do {
    text += "<br>数字为 " + i;
    i++;
}
while (i < 5) { 
    document.getElementById("demo").innerHTML = text;
}

/*
数字为 0
数字为 1
数字为 2
数字为 3
数字为 4
*/
