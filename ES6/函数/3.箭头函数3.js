// this.a = 111111; // 这个才是对象中属性为箭头函数的函数内部的this, 属性所在的对象不是该属性箭头函数的内部this
const obj = {
  hello3: () => {
    return this.a;
  },
  hello4: function (params) {
    return this.a;
  }
};
obj.a = 123;
obj.hello = () => console.log(this.a);
obj.hello2 = () => this.a;
obj.hello();
console.log(obj.hello2());
console.log(obj.hello3());
console.log(obj.hello4());
