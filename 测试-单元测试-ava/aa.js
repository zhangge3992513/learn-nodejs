

require('fs').readFile(__filename, (err, data) => {
  console.log(data.toString());
  /* let a = new Function(data.toString());
  a(); */
});

/* let a = new Function('console.log(123)');
a(); */

/* let a = new Function(`console.log(require('fs'))`);
a();
 */
