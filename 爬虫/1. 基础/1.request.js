const request = require('request');

request('https://item.jd.com/11928293.html', (error, response, body) => {
  console.log('error', error);
  console.log('stastusCode', response.statusCode);
  console.log('body', body);
});
