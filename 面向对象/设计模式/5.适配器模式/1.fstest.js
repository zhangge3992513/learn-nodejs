const fs = require('fs');
fs.writeFile(__dirname+'/a.txt', 'hello!', () => {
  fs.readFile(__dirname+'/a.txt', { encoding: 'utf8' }, (err, res) => {
    console.log(res);
  });
});

