// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
// 和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
// 如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。
/* 原生具备 Iterator 接口的数据结构如下。
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
*/

let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

// ES5的写法
const arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
arr1.push('d');
console.log(arr1);
// ES6的写法
const arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);

console.log(Array.from(arrayLike, x => x * x));

// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], x => x * x);
// [1, 4, 9]

