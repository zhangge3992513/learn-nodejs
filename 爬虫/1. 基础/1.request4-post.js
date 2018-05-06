const request = require('request');


request.post('http://localhost:3000/user/1', (error, response, body) => {
  console.log('error', error);
  console.log('stastusCode', response.statusCode);
  console.log('body', body);
});
