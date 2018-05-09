class A {
  constructor() {
    this.a();
    this.a = () => {
      console.log('a');
    };
    this.a = undefined; // 此行注释, 下面输出 a, 否则报错
  }
  a() {
    console.log('aaa');
  }
}

const obj = new A();
obj.a();
