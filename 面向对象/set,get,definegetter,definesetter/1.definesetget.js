class MyObj {
  constructor() {
    this.a = 123;
    this.b = 123;
  }
}
// MyObj.prototype.__defineSetter__ = ();
const obj1 = new MyObj();
obj1.__defineGetter__('a', () => 1); // Eslint不建议 调用 _xxx()方法
console.log(obj1);




