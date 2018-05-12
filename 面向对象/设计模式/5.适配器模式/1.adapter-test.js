const fsadapter = require('./1.fsAdapter');
const levelUp = require('level');
const db = levelUp('./fsDB', { valueEncoding: 'binary' });
const fs = fsadapter(db);
fs.readFile(__dirname+'/a.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  return console.log(data);
});

