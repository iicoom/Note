const arr = [1, -1, 2, 3, 4]
function getResult() {
  for(let j = 0; j < arr.length; j ++) {
    if(arr[j] < 0) {
      continue
    }
    if(arr[j] === 3) {
      return arr[j]
      // break
    }
    console.log("current j:", j)
  }
}
console.log(getResult())