function createProxy(subject) {
  const helloOrig = subject.hello;
  this.a= 1;
  // subject.hello = () => `${helloOrig.call(subject)} world!`;
  subject.hello = () => `${helloOrig.call(this)} world!`;
  return subject;
}

let objProxy = createProxy({
  a: 123,
  hello: function (params) {
    return 'Hello a ' + this.a;
  }
});
console.log(objProxy.hello());

