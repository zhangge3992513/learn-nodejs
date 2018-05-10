function createLoggingWritable(writableOrig) {
  const proto = Object.getPrototypeOf(writableOrig);
  function LoggingWritable(writableOrig) {
    this.writableOrig = writableOrig;
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
  LoggingWritable.prototype.end = () => {
    console.log(this);
    return this.writableOrig.end(...arguments)
  };
  return new LoggingWritable(writableOrig);
}


const fs = require('fs');
const { join } = require('path');

const writable = fs.createWriteStream(join(__dirname, 'test.txt'));
const writableProxy = createLoggingWritable(writable);
writableProxy.write('First chunk');
writableProxy.write('Secodnd chunk');
writableProxy.write('This is not logged');
writableProxy.end();
