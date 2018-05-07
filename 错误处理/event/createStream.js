const fs = require('fs');

const stream = fs.createReadStream('aaa'); // 不存在的文件会报错

stream.on('error', (err) => { // 监听错误事件
  console.log(err);
});
