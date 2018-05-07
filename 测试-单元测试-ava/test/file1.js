const test = require('ava');

test.cb('#readFile()', (t) => {
  require('fs').readFile(__filename, (err, data) => {
    t.true(data.length < 10);
    t.end();
  });
});


require('fs').readFile(__filename, (err, data) => {
 console.log(data);
});