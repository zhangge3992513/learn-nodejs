const { join } = require('path');
const childProcess = require('child_process').fork(join(__dirname, '4.worker.js'));
const server = require('net').createServer();


server.on('connection', (socket) => {
  /* socket.on('data', (data) => {
    console.log('对方', data);
  });
  socket.on('end', () => {
    socket.end('结束');
  }); */
  // console.log(222);
  socket.end('handled by parent');
});

server.listen(3000, () => {
  childProcess.send('server', server);
});

server.on('error', (error) => {
  console.log(error);
});
