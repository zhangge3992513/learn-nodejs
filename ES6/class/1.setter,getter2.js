class My {
  constructor() {
    this.a = 1;
    this.b = 2;
  }
  /* async get a() {
    // return this.b;
    let temp = await new Promise((resolve, reject) => {
      resolve(123);
    });
    return temp;
  } */

  get a() {
    /* return new Promise((resolve, reject) => {
      resolve(123);
    }); */

    return (async function (params) {
      return await new Promise((resolve, reject) => {
        resolve(111111);
      });
    })(); // 这个直接返回promise对象
  }

  set a(x) {
    this.b = x;
  }
}
const my1 = new My();
// console.log(my1.a.then(data => {console.log(data)}));
console.log(my1.a);
