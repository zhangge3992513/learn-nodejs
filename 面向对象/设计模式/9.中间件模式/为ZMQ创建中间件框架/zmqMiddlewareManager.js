module.exports = class ZmqMiddlewareManager {
  constructor(socket) {
    this.socket = socket;
    this.inboundMiddleware = [];
    this.outbountMiddleware = [];
    socket.on('message', (message) => {
      this.executeMiddleware(this.inboundMiddleware, { data: message });
    });
  }

  send(data) {
    const message = { data };
    this.executeMiddleware(this.outbountMiddleware, message, () => this.socket.send(message.data));
  }

  use(middleware) {
    if (middleware.inbound) {
      this.inboundMiddleware.push(middleware.inbound);
    }
    if (middleware.outbound) {
      this.outbountMiddleware.unshift(middleware.outbound);
    }
  }
};
