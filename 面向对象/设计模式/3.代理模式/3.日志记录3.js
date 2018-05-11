function createLoggingWritable(writableOrig) {
  const proto = Object.getPrototypeOf(writableOrig);
  let that = null;
  this.writableOrig = writableOrig;
  function LoggingWritable(writableOrig) {
    this.writableOrig = writableOrig;
    that = this;
  }
  LoggingWritable.prototype = Object.create(proto);

  LoggingWritable.prototype.write = function (chunk, encoding, callback) {
    if (!callback && typeof encoding === 'function') {
      callback = encoding;
      encoding = undefined;
    }
    console.log('Writing', chunk);
    return this.writableOrig.write(chunk, encoding, () => {
      console.log('Finished writing', chunk);
      callback && callback();
    });
  };

  // LoggingWritable.prototype.on = () => this.writableOrig.on.apply(this.writableOrig, arguments);
  LoggingWritable.prototype.on = function() { return this.writableOrig.on(...arguments)};

  // LoggingWritable.prototype.end = function() { return this.writableOrig.end(...arguments)};
  LoggingWritable.prototype.end = (str) => {
    // console.log(this);
    return this.writableOrig.end(str); // !此处this 指向的是createLoggingWritable的内部this, 但是最好还是对象内部的writableOrig属性
  };
  return new LoggingWritable(writableOrig);
}


const fs = require('fs');
const { join } = require('path');

const writable = fs.createWriteStream(join(__dirname, 'test.txt'), { flags: 'a+' });
const writableProxy = createLoggingWritable(writable);
writableProxy.write('First chunk\n');
writableProxy.write('Secodnd chunk\n');
writableProxy.write('This is not logged\n');
writableProxy.end();
