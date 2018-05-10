function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);
  function Proxy(subject) {
    this.subject = subject;
  }
  Proxy.prototype = Object.create(proto);
  Proxy.prototype.hello = () => `${this.subject.hello()} world!`;
  Proxy.prototype.goodbye = () => `${this.subject.goodbye.apply(this.subject, arguments)}`;
  return new Proxy(subject);
}

// 或者
function createProxy(subject) {
  return {
    hello: () => `${subject.hello()} world!`,
    goodbye: () => `${subject.goodbye.apply(subject, arguments)}`,
  };
}
