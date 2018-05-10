// ...
// 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。
// 但是扩展运算符无法将类数组的对象转成真正的数组, 除非这个类数组实现了iterator接口.
// 它可以替代函数的 apply 方法. 主要是函数的参数可以接受多个参数, 二给出的参数是数组, 所以要么用...传递参数,要么用函数.apply()
// 将一个数组转为用逗号分隔的参数序列(在函数中作为参数的扩展运算符).

/* 主要应用:
将字符串转真正数组
与解构赋值结合
合并数组 */
console.log([...[1, 2, 3]]);
console.log(...[]);
console.log([...[], 1]);

let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};
console.log(...Array.from(arrayLike));
// console.log(...arrayLike); // 报错
console.log([1, 2, 3, 4]);
// const arr = (...[1,2,3]);
// console.log(arr);
const strArr = [...'abcdefg'];
console.log(strArr);

const [a2, ...b2] = [1, 2, 3, 4, 5, 6];
console.log(b2);

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr1 = [...map.keys()]; // [1, 2, 3]
let arr2 = [...map];
console.log(arr2);


function push(array, ...items) { // 这个实际上是将多个逗号隔开的参数序列转成数组 items, 前提是, 传进来的是多个逗号隔开的参数序列
  array.push(...items);
}
const arr3 = [1, 2, 3];
push(arr3, [4, 5]);
console.log(arr3);

const arr4 = [1, 2, 3];
push(arr4, ...[4, 4]); // 后面是多个逗号隔开的参数序列, 所以函数参数将后面的参数序列又转回去了.
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5, 6];
/* push(...arr5); // 会报错, 因为第一个元素是参数array, [2,3,4,5,6]是第二个参数items.
console.log(arr5); */

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers); // 42
