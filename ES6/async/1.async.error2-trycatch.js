function p1() {
  return new Promise((resolve) => {
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
 * 使用try-cath包裹异常, 后面的代码会正常执行.
 */
async function asyncFn1() {
  const a1 = await p1();
  console.log(a1);
  try {
    await p2();
  } catch (error) {
    console.log(error);
    console.log('try-catch the error');
  }
  await 1;
  console.log(123);
  await p2(); // *: 此处错误会被 最后面的 catch捕获, 后面代码无法执行
  return 123456;
}
asyncFn1().then((data) => {
  if (data) {
    console.log('last data');
  }
  console.log(data, 'last result');
}).catch((err) => {
  console.error(err, 'last catch error');
});
// !: 阿萨德
// //: asd
// ?: asd
// *: asd
// todo: aaa
// TODO: aaa

