
class MyClass {
  constructor() {
    this.a = 123;
    this.b = 111;
  }
  async say() {
    let a2 = await new Promise((resolve, reject) => {
      resolve(this.a + 1); //* ,  返回124, 则 a2 = 124;
    });
    console.log('输出:', this.a);
    return this.a + 1000; //* ,  say() 函数执行完成后, 回调函数返回的值.
  }
}
const myObject1 = new MyClass();

myObject1.say().then((data) => {
  console.log(data); //* , 这个输出say()函数执行完后 返回的值
});
myObject1.say();

