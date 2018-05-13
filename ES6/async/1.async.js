async function fn1(params) {
  let a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
  return a+1000;
}

let a = fn1().then(data=> {
  console.log(data, '111');
});
console.log(a, '000');

