// ES6
class Permutation {
    constructor(arr) {
        this.arr = Array.from(arr);
        this.result = [];
        this.len = 0;
        this.run(0);
    }

    run(index) {
        if (index == this.arr.length - 1) {
            this.result.push(Array.from(this.arr));
            this.len++;
            return;
        }
        for(let i = index; i < this.arr.length; i++) {
            [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
            this.run(index + 1);
            [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
        }
    }
  }

  let p = new Permutation(["A", "B", "C"]);
  p.run(0)
  console.log(p.result);
  console.log(p.len);
  // [ [ 'A', 'B', 'C' ],
  //   [ 'A', 'C', 'B' ],
  //   [ 'B', 'A', 'C' ],
  //   [ 'B', 'C', 'A' ],
  //   [ 'C', 'B', 'A' ],
  //   [ 'C', 'A', 'B' ] ]
  // 6





// 数组全排列
function Permutation(arr) {
    this.len = 0;    // 存储全排列次数
    this.arr = arr.concat();   // 传入的数组
    this.result = [];    // 存储全排列结果


}

// 递归函数(核心方法)，index为数组下标
Permutation.prototype.run = function(index) {
    // 单遍历到数组末端时，将结果储存在result数组中，全排列次数加1
    if (index == this.arr.length - 1) {
        this.result.push(this.arr.slice());
        this.len++;
        return;
    }

    for(let i = index; i < this.arr.length; i++) {
        this.swap(this.arr, index, i);      // 与下标为i的元素交换位置
        this.run(index + 1);                // 剩下元素全排列
        this.swap(this.arr, index, i);      // 复原数组
    }
}

// 交换位置
Permutation.prototype.swap = function(array, i, j) {
    var t;
    t = array[i];
    array[i] = array[j]; 
    array[j] = t;
}

Permutation.prototype.start = function() {
    this.run(0);
}

var per = new Permutation(['A', 'B', 'C']);
per.start();
console.log(per.result);
console.log(per.len);

