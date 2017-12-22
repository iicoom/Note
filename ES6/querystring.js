let str1 = "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled";

/*function parse(str) {
  var paramObj = {};
  var paramArr = str.split('&');
  for (var i = 0; i < paramArr.length; i++) {
    var tmp = paramArr[i].split('=');
    // 把 key 和 value 单独拆开来，会清晰很多
    var key = tmp[0];
    var value = tmp[1] || true;
    if (!paramObj[key]) {
      paramObj[key] = value;
    } else {
      var newValue = [paramObj[key], value];
      paramObj[key] = newValue;
    }
  }

  return paramObj;
}*/

// { 'http://www.domain.com/?user': 'anonymous',
//   id: [ '123', '456' ],
//   city: '%E5%8C%97%E4%BA%AC',
//   d: true,
//   enabled: true }

/*function parse(str) {
  if (typeof str !== 'string') {
    return {};
  }

  var paramObj = {};
  var paramArr = decodeURI(str).split('&');  // 先解码
  for (var i = 0; i < paramArr.length; i++) {
    var tmp = paramArr[i].split('=');
    var key = tmp[0];
    var value = tmp[1] || true;
    if (typeof paramObj[key] === 'undefined') { // 判断 key 是否存在
      paramObj[key] = value;
    } else {
      var newValue = Array.isArray(paramObj[key]) ? paramObj[key] : [paramObj[key]];  // 正确处理数组
      newValue.push(value);
      paramObj[key] = newValue;
    }
  }

  return paramObj;
}*/

function parse(str) {
  if (typeof str !== 'string') {
    return {};
  }

  return decodeURI(str).split('&').map(param => {
    const tmp = param.split('=');
    const key = tmp[0];
    let value = tmp[1] || true;
    if (typeof value === 'string' && isNaN(Number(value)) === false) {
      value = Number(value);
    }

    return { key, value };
  }).reduce((params, item) => {
    const { key, value } = item;
    if (typeof params[key] === 'undefined') {
      params[key] = value;
    } else {
      params[key] = Array.isArray(params[key]) ? params[key] : [params[key]];
      params[key].push(value);
    }

    return params;
  }, {});
}

let paramArr = parse(str1)

console.log(paramArr)