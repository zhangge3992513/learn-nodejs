function* A(x) {
  const y = yield x;
  const z = yield y + 12;
  const a = yield X(1);
  const b = yield p1();
  return z;
}

function X(params) {
  setTimeout(() => {
    console.log(1222);
    return 1;
  });
}

function p1(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1111);
      resolve(1);  
    });
  });
}

/* 
for (const iterator of A(1)) { // 返回的是yield表达式右边的值
  console.log(iterator);
} */

const a = A(1);
console.log( a.next());
console.log( a.next());
console.log( a.next());
console.log( a.next()); // value是Promise对象, 可以 promise.then(data => {a.next()})
console.log( a.next());
