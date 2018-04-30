// Array.of方法用于将一组值，转换为数组。
// 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
/* Array.of方法可以用下面的代码模拟实现。

function ArrayOf(){
  return [].slice.call(arguments);
} */

const arr = Array.of('b', 1, 2, 3, 4, 5, 6, 'a');
console.log(arr);
console.log(Array.of(null, null));
console.log(Array.of(undefined, null));
console.log(Array()); // []
console.log(Array(3)); // [, , ,] 长度为3的空数组
console.log(Array(3, 4));// [3,4]
console.log(Array(3, 4, 5)); // [3, 4, 5]

let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};
console.log(Array.of(arrayLike));
// console.log([].slice.call(null));

function ArrayOf() {
  // return [].slice.call(arguments);
  // console.log(arguments);
  return [...arguments];
}
console.log(ArrayOf(null, undefined));
console.log(...[1]);
console.log(Array.of(), ArrayOf());

