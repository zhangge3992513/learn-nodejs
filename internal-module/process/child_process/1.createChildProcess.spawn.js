const { spawn } = require('child_process');

const ls = spawn('ls', ['-1h', '/usr']);
ls.stdout.on('data', (data) => {
  console.log('stdout:', data.toString());
});
ls.stderr.on('data', (data) => {
  console.log('stderr', data.toString());
});
ls.on('close', (code) => {
  console.log('child proess exited with code', code);
});

