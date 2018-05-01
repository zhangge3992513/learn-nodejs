var p = new Promise((resolve, reject) => {
  console.log('1.1');
  resolve();
  console.log('1.2');
});
p.then(data => {
  console.log('0');
  console.log('00');
  console.log('by github');
})

