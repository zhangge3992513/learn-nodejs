const request = require('request');

// http://img6.bdstatic.com/img/image/pcindex/shitu_w03.jpg
const option = {
  url: 'http://img6.bdstatic.com/img/image/pcindex/shitu_w03.jpg', // http://localhost:3000/user/1  // https://item.jd.com/11928293.html
  headers: {
    Accept: 'text/html',
    'Accept-charset': 'utf8',
    'Cache-Control': 'max-age=0',
    Connection: 'keep-alive',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;',
    'User-Agent': 'example agent',
  },
};
request(option, (error, response, body) => {
  console.log('error', error);
  console.log('stastusCode', response.statusCode);
  console.log('body', body);
});

