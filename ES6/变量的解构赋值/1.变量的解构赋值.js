/**
 * 变量的解构赋值涉及到, 函数, 数组等内部的使用
 * 尤其是在函数的参数中.
 *
 * 用途:
 * 1）交换变量的值
 * 2）从函数返回多个值
 *  let { foo, bar } = example();
 * 3）函数参数的定义
 *   参数是一组有次序的值
      ```function f([x, y, z]) { ... }
      f([1, 2, 3]);
      ```
      // 参数是一组无次序的值
      ```
      function f({x, y, z}) { ... }
      f({z: 3, y: 2, x: 1});
      ```
  4）提取 JSON 数据
  5）函数参数的默认值
    指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
  6）遍历 Map 结构
    ```
      for (let [key, value] of map) {
      console.log(key + " is " + value);
      }
      // 获取键名
      for (let [key] of map) {
        // ...
      }

      // 获取键值
      for (let [,value] of map) {
        // ...
      }
    ```
  7）输入模块的指定方法
      加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
      const {join} = require('path');

 */

const { a, b = 123 } = {};
console.log(a, b);

const { a2, b2 = 123 } = { a2: 1 };
console.log(a2, b2);

const { a3, b3 = 123 } = { b3: 1 };
console.log(a3, b3);

const { a4, b4 = 123 } = { a4: 1, b4: 1 };
console.log(a4, b4);

const jsonData = {
  id: 42,
  status: 'OK',
  data: [867, 5309],
};

const { id, status, data: number } = jsonData;

console.log(id, status, number);
