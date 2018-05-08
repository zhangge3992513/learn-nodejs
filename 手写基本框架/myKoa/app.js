const Emitter = require('events');
const http = require('http');

module.exports = class MyKoa extends Emitter {
  constructor() {
    super();
    this.middleware = [];
    this.nameList = [];
  }

  use(fn, name) {
    this.middleware.push(fn);
    this.nameList.push(name);
  }

  middle(req, res) {
    res.end('I am Mykoa');
  }
  listen(port) {
    const server = http.createServer((req, res) => {
      this.middle(req, res);
    });
    return server.listen(port);
  }
};

