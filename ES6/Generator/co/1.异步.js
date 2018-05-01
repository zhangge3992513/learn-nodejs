/**
 * 使用 co 的前提条件是，Generator 函数的yield命令后面，只能是 Thunk 函数或 Promise 对象。
 * 如果数组或对象的成员，全部都是 Promise 对象，也可以使用 co.
 * 
 */
const co = require('co');

function* g1() {
  /* const body = yield (done) => {
    setImmediate(() => done(null, '<p>Hello World</p>'));
  }; */
  const body = yield (done) => {
    // process.nextTick(() => done(null, '<p>Hello World</p>'));
    // process.nextTick(() => done(null, '<p>Hello World</p>'));
    // setTimeout(() => done(null, '<p>Hello World</p>'));
    return '<p>Hello World</p>';
  };
  console.log(body, 'end');
}
co(g1);
