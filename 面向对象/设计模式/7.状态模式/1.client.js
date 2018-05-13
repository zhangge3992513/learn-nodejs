const createFailsafeSocket = require('./1.failsafeSocket');

const failsafeSocket = createFailsafeSocket({ port: 5000 });

setInterval(() => {
  failsafeSocket.send(process.memoryUsage);
}, 1000);
