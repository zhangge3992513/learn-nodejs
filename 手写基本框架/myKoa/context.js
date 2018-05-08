module.exports = class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  print() {
    console.log(this.req);
    console.log(this.res);
  }
  end() {
    this.res.end();
  }
};

