
function coundown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = coundown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(coundown(5))
//
  function countdown1(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown1(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }
  console.log(countdown1(5))
//
function countdown2(n){
  return n < 1 ? [] : [n].concat(countdown2(n - 1));  
}
console.log(countdown2(5))
//
function countdown3(n){
  return n < 1 ? [] : [n, ...countdown3(n - 1)];
}
console.log(countdown3(5))