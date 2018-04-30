const arr = ['red', 'green', 'blue'];

for(let v of arr) {
  console.log(v); // red green blue
}

const obj = {
  0: '00',
  1: '11',
  2: '22',
  length:3,
};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(obj); // 使用arr的遍历器, 拿到的也是arr的数据

for(let v of obj) {
  console.log(v); // red green blue
}
