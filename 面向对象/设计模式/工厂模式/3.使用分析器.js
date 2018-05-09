const profiler = require('./3.构建一个简单的代码分析器');

function getRandomArray(len) {
  const p = profiler(`Generating a ${len} items long array`);
  p.start();

  const arr = [];
  for (let index = 0; index < len; index++) {
    arr.push(Math.random());
  }
  p.end();
}
getRandomArray(1e6);
console.log('done');

// export NODE_ENV=development   node 3.使用分析器.js
