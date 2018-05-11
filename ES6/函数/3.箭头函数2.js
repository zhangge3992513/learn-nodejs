const obj = {
  b: 123,
  c: () => {
    // console.log(this.b);
    this.d();
  },
  d: () => {
    console.log('d');
  },
  e: function (params) {
    console.log(this);
  },
  f: function (params) {
    return () => this.b; // !这个this指向箭头函数所在的普通函数的this, 普通函数的this指向调用他的对象的this
  },
  g: function (params) {
    return (()=> console.log(this.b, 1111))();
  },
  h: () => ObjTem1.hello.call(this),
  i: () => console.log(this.b),
}

const ObjTem1 = {
  hello: function (params) {

    return 'hello'+ this.b;
  }
}
obj.a = () => {
  console.log(this.b);
}
obj.a();
// obj.c();
obj.e();
console.log(obj.f()());
obj.g();
console.log(obj.h());
const ObjTem2 = {}

ObjTem2.hello = () => ObjTem1.hello.call(this)+'world';
console.log(ObjTem2.hello());

obj.i();

