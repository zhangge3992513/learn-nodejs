const co = require('co');

function* g1(params) {
  /* const body = yield (done) => {
    setImmediate(() => done(null, '<p>Hello World</p>'));
  }; */
  const body = 'hello world';
  console.log(body, 'end');
}
co(g1);
