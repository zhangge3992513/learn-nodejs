const { Readable } = require('stream');

class MyReadable extends Readable {
  constructor(array) {
    // Calls the stream.Readable(options) constructor
    super({ objectMode: false }); // true:data is string, false: data is buffer
    // ...
    this.array = array;
  }
  _read() { // 必须实现_read方法
    console.log('11111111');
    if (this.array.length) {
      this.push(this.array.shift()); // 向可读流添加数据 // 准确说是向可读缓冲器里面添加数据
      // 注意：一旦readable._read()方法被调用，只有在 readable.push()方法被调用之后，才能再次被调用。
    } else {
      console.log('执行end');
      this.push('');
      this.push('end 123');
      this.push(null);
      // this.push('');
    }
  }
}
const array = ['a', 'b', 'c', 'd', 'e'];
const read = new MyReadable(array);
read.on('data', (data) => {
  console.log(data, data.toString());
});
read.on('end', () => {
  console.log('结束读取');
});
// console.log('a');
