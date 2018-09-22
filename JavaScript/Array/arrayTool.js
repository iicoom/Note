/**
 * 判断target是否在range内
 * @param target
 * @param range
 * @returns {boolean}
 */
const isInRange = function(target, range) {
    if ( range[0]<=target && target<=range[1]) {
        return true;
    } else {
        return false;
    }
}

/**
 *
 * @param target
 * @param array
 * @returns {boolean}
 */
const isInArray = function(target, array) {
  for(var i = 0; i < array.length; i++){
    if(target === array[i]){
      return true;
    }
  }
  return false;
}

const isInArray = function(target, array) {
  array.forEach(())
  for(var i = 0; i < array.length; i++){
    if(target === array[i]){
      return true;
    }
  }
  return false;
}

const arr1 = [ false, true, false, true, false, true, false];
const arr2 = [ 1, 2, 12 ];

arr1.forEach(function(item){
  if(item == false) {
    return result.is3User = false;
  } else {
    return result.is3User = true;
  }
})


_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.
 
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).



