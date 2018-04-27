const { Writable } = require('stream');
const fs = require('fs');
const path = require('path');

const myWritable = new Writable({
  write(chunk, encoding, callback) {
    // ...
    // console.log(chunk);
    if (callback) {
      callback();
    }
  },
});

// console.log(myWritable);
myWritable.write('a');


const file1 = path.join(__dirname, './file.log');
const fsWritestream = fs.createWriteStream(file1);
fsWritestream.write('1');

