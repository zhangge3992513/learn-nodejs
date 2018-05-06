function createHeader(url) {
  const option = {
    url,
    headers: {
      Accept: 'text/html',
      'Accept-charset': 'utf8',
      'Cache-Control': 'max-age=0',
      Connection: 'keep-alive',
      Cookie: '', // socme cookie,
      // Host: 'https://github.com/', // www.xx.com;
      'Upgrade-Insecure-Requests': 1,
      // 'User-Agent': '', // .....
    },
  };
  return option;
}
module.exports = createHeader;
