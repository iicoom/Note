arr = [true,false,true,false]

static getType(arr) {
    const newArr = [];
    arr.forEach((index) => {
      if (index) {
        newArr.push('1');
      } else {
        newArr.push('0');
      }
    });
    return newArr.join('');
  }