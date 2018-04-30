/* 箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。 */
const { EventEmitter } = require('events');

class MyEventEmiter extends EventEmitter {
  constructor() {
    super();
    this.stattus = 'a';
  }
}
const e1 = new MyEventEmiter();
process.nextTick(() => e1.emit('begin'));
e1.on('begin', function () {
  console.log(this.stattus);
});
e1.on('begin', () => {
  console.log('begin', this.status);
});
console.log(1);


(function (params) {
  this.a = 123;
  (()=>{
    console.log(this.a);
    (()=>{
      console.log(this.a ,123);
    })()
  })()
})()



