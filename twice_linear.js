function dblLinear(n) {
  let arr = [1];
  let i = 0;
  let m = 1;
  while (m < n) {
    let y = 2 * arr[i] + 1;
    m = arr.length - 1;
    while (arr[m] > y) {
      m--;
    }
    //console.log(arr, y, m, arr[m]);
    if (y != arr[m]) {
      arr.splice(m + 1, 0, 2 * arr[i] + 1)};
    arr.splice(arr.length, 0, 3 * arr[i] + 1);
    i++;
  }
  return arr[n];
}

var assert = require('assert');
assert.equal(dblLinear(10), 22)
assert.equal(dblLinear(20), 57)
assert.equal(dblLinear(30), 91)
assert.equal(dblLinear(50), 175)
assert.equal(dblLinear(100), 447)
