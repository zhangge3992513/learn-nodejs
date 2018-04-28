const { Readable } = require('stream');
/* eslint no-underscore-dangle: ["error", { "allow": ["_max","_index"] }] */
/* eslint no-plusplus: 0 */
class Counter extends Readable {
  constructor(opt) {
    super(opt);
    this._max = 1000000; // 1000000
    this._index = 1;
    this.sizeAll = 0;
  }

  _read() {
    const i = this._index++;
    if (i > this._max) {
      this.push(null);
    } else {
      const str = `${i}`; // '' + i;
      const buf = Buffer.from(str, 'ascii');
      // console.log(str, size);
      if (i === 999999) {
        // console.log(str, size);
      }
      this.push(buf);
    }
  }
}
const counter = new Counter();// { highWaterMark: 1000000 }
const arr = [];
counter.on('data', (data) => {
  // console.log(data, data.toString());
  arr.push(data);
  // console.log(arr.length, data.length, counter.sizeAll += Buffer.byteLength(data));
});

counter.on('end', () => {
  console.log(arr.length, '99999999');
  let temp = '';
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < arr[index + 1]) {
      temp = arr[index + 1];
    }
  }
  console.log(temp, temp.toString());
  // console.log(Buffer.concat(arr).toString());
});
