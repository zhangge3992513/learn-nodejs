function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('错误❌'));
    }, 2000);
  });
}

/**
 * 错误会在最后面的catch中捕获, 但是报错后, 后面的代码就不再执行.
 */
async function asyncFn1() {
  const a1 = await p1();
  console.log(a1);
  await p2();
  await 1;
  console.log(123); // 不打印
  return 123456;
}
asyncFn1().then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
