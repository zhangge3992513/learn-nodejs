const { Writable } = require('stream');
// console.log(Writable);
class MyWritable extends Writable {
  constructor(options) {
    super(options);
    this.name = 'a'; // 必须写在后面, 以此来覆盖父类的属性, 否则父类方法覆盖子类属性
    // this.writea = this.write.bind(this); // 前端需要提前绑定一些方法的this, 比如onclick的this指向
  }

  write(data, cb) {
    this.name = 'data';
    if (cb) {
      cb();
    }
  }
}
// console.log(MyWritable.prototype.write);

const writableObj1 = new MyWritable();
// console.log(writableObj1);
writableObj1.write('a');
// writableObj1.writea('a');

