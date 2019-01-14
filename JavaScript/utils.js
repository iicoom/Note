/**
 * 生成指定长度的随机数(字母数字组合)
 */
function getRandomCode(length) {
   if (length > 0) {
      var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", 
      "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", 
      "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
      "w", "x", "y", "z"];
      var nums = "";
      for (var i = 0; i < length; i++) {
         var r = parseInt(Math.random() * 61);  // 数据源数为61
         nums += data[r];
      }
      return nums;
   } else {
      return false;
   }
}

/**
 * 生成指定长度的随机数(0-9数字组合)
 */
function randomNum(length = 6){

  let result = '';

  while (length > 0) {
      result += (Math.random() * 9).toFixed(0);
      length--;
  }

  return result;
}
