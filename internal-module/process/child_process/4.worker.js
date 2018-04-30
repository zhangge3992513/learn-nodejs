process.on('message', (m, server) => {
  console.log(m, server);
  if (m === 'server') {
    server.on('connection', (socket) => {
      console.log('child 111');
      socket.end('process handled by child');
    });
  }
});
console.log(111);
