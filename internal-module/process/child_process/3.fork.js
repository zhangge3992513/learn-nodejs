const childProcess = require('child_process');
const { join } = require('path');

const worker = childProcess.fork(join(__dirname, '3.worker.js'), ['bbb', 'args1', 'aaa']);
worker.on('exit', () => {
  console.log('child process exit');
});
worker.send({ hello: 'hello child' });
worker.on('message', (msg) => {
  console.log('from child', msg);
});

