function flat(arr, depth) {
    let dep = 0
    let result = []
    if(depth > 0) {
        dep = depth
    }

    for(let i = 0; i<arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])
        } else {
            // flat

            result.push(justFlat(arr[i]))
        }
    }

    function justFlat(ele) {
        if(!Array.isArray(ele)) {
            return ele
        }
        for(let j=0;j<ele.length;j++) {
            // 递归调用
            return justFlat(ele[j])
        }
    }
    console.log('final arr', result)
}

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
flat(arr4)