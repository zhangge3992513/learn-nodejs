const promiseObj = new Promise((resolve, reject) => {
  throw new Error('炸了!🤕');
  // reject(new Error('炸了啊😭')); // 也可以
});
promiseObj.catch((err) => {
  console.log(err);
  console.log('========');
});

