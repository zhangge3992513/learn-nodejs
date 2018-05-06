const cheerio = require('cheerio');

const html = `
  <ul id = "fruits">
    <li class="apple">Apple<li/>
    <li class="orange">Orange<li/>
    <li class="pear">Pear<li/>
  <ul/> 
`;
const $ = cheerio.load(html);
console.log($('.apple', '#fruits').text());
