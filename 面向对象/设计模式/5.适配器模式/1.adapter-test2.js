const fsadapter = require('./1.fsAdapter');
const levelUp = require('level');

const db = levelUp(`${__dirname}/fsDB`, { valueEncoding: 'binary' });
const fs = fsadapter(db);
console.time('插入读取');
fs.writeFile(`${__dirname}/a`, '上涨三', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
  fs.readFile(`${__dirname}/a`, () => {
    if (err) {
      return console.log(err);
    }
    console.timeEnd('插入读取');
    return console.log(data.toString());
  });
});

