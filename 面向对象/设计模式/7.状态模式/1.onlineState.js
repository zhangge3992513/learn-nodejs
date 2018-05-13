module.exports = class OnlineState {
  constructor(failstafeSocket) {
    this.failstafeSocket = failstafeSocket;
  }

  send(data) {
    this.failstafeSocket.socket.write(data);
  }

  activate() {
    this.failstafeSocket.queue.forEach((data) => {
      this.failstafeSocket.scoket.write(data);
    });

    this.failstafeSocket.queue = [];

    this.failstafeSocket.socket.once('error', () => {
      this.failstafeSocket.changeState('offline');
    });
  }
};

