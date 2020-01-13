[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  console.log(accumulator, currentValue, currentIndex, array)
  return accumulator + currentValue;
});

/*
0 1 1 (5) [0, 1, 2, 3, 4]
1 2 2 (5) [0, 1, 2, 3, 4]
3 3 3 (5) [0, 1, 2, 3, 4]
6 4 4 (5) [0, 1, 2, 3, 4]
10
*/
