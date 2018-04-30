// ...
// 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。
// 但是扩展运算符无法将类数组的对象转成真正的数组, 除非这个类数组实现了iterator接口.
// 它可以替代函数的 apply 方法. 主要是函数的参数可以接受多个参数, 二给出的参数是数组, 所以要么用...传递参数,要么用函数.apply()
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
