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
    return () => this.b;
  },
  g: function (params) {
    return (()=> console.log(this.b, 1111))();
  },
}
obj.a = () => {
  console.log(this.b);
}
obj.a();
// obj.c();
obj.e();
console.log(obj.f()());
obj.g();
