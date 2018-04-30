// 浅复制拷贝

// ES5的数组复制
const a1 = [1, 2, { a: 123 }];
const a2 = a1.concat();

a2[0] = 2;
a2[2].a = 1234;
console.log(a1);

// ES6的数组复制
const a3 = [1, 2, { a: 123 }];
// 写法一
const a4 = [...a3];
a4[2].a = 1234;
console.log(a4);
// 写法二
const [...a5] = a3;
a5[2].a = 12345;
console.log(a5);

