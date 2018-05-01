const p = new Promise((resolve, reject) => {
  setTimeout((params) => {
    console.log('1.1');
  });
  resolve();
  // reject(new Error(123));
  console.log('1.2'); // 会执行
});
p.then((data) => {
  console.log('0');
}).catch((err) => {
  console.log(err);
});

