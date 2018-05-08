const len = 1e6;
const arr = [];
console.time('a');
for (let index = 0; index < len; index++) {
  arr.push(Math.random());
}
console.timeEnd('a');
