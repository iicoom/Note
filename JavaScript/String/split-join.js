// join and split
['jj',0,'ii'].join()
"jj,0,ii"
"jj,0,ii".split()
["jj,0,ii"]


/**
 * 解析URL参数
 *
 * @static
 * @param {any} url
 * @returns
 * @memberof Utility
 */
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const obj = {};
  url.replace('?', '').split('&').forEach((keyValue) => {
    const arr = keyValue.split('=');
    const key = arr[0];
    const value = arr[1];
    obj[key] = value;
  });
  return obj;
}

const activityUrl = "?activity_id=5a2b943775930f7b04fc47f9&skip=0&limit=15";

console.log("=========activityUrl.replace('?', '').split('&')=========")
console.log(activityUrl.replace('?', '').split('&'))
// => 
/*
[ 'activity_id=5a2b943775930f7b04fc47f9', 'skip=0', 'limit=15' ]
*/

[ 'activity_id=5a2b943775930f7b04fc47f9', 'skip=0', 'limit=15' ].forEach((keyValue) => {
  const arr = keyValue.split('=');
})


console.log( '=========parseUrl(activityUrl)=========' )
console.log( parseUrl(activityUrl) )

// =>
/*
{ activity_id: '5a2b943775930f7b04fc47f9',
  skip: '0',
  limit: '15' }
*/

'1000'.split('')
(4) ["1", "0", "0", "0"]

