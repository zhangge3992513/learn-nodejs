// 数组的合并, 利用扩展运算符, 或者concat

const more = [1, 2, 3, 4, 5];
// ES5, 利用concat返回新的数组
console.log([1, 2].concat(more));
// ES6, 利用扩展运算符
console.log([1, 2, ...more]);

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
const arr4 = [...arr1, ...arr2, ...arr3];
// [ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr4);
