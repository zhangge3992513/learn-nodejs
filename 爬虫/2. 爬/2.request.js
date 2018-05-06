const request = require('request');
const cheerio = require('cheerio');
const createHeader = require('./1.createHeader');

function RequestID(id) {
  const header = createHeader(id);
  request(header, (err, response, body) => {
    if (err) {
      console.log('error', err);
    } else if (response.statusCode === 200) {
      console.log('success, end time:', process.uptime());
      getStar(cheerio.load(body));
    } else {
      console.log('Warning: get http response exception ', body);
    }
  });
}
RequestID('https://github.com/davideuler/architecture.of.internet-product');

function getStar($) {
  // let start = $('div.unstarred a').html() | $('div.starred a').html();
  const start = $('.js-social-count').html();
  console.log(start);
  console.log(start.trim());
}
console.log(' a '.trim());

