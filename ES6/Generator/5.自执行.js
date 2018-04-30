function auto(geFn) {
  if(!geFn.prototype.constructor === 'GeneratorFunction {}'){
    throw new Error('参数错误');
    // return;    
  }
  let a = geFn(); // {}.
  // console.log(geFn, a[Symbol.iterator]);
  autoIn(a);

  function autoIn(iterator, valuePre) {
    // console.log(iterator,iterator[Symbol.iterator]);
    /* if(!iterator[Symbol.iterator]){
      // throw new Error('参数错误❌');
      // console.log(iterator,iterator[Symbol.iterator]);
      return;
    } */
    if(iterator.done){
      return 0;
    }
    let temp = iterator.next(valuePre);
    console.log(temp.value);
    if(temp.value instanceof Promise ){
      temp.value.then(data => {
        autoIn(iterator, data);
      });
    }else{
      autoIn(iterator, temp.value);
    }
    /* if(temp.done){
      return ;
    } */
    
  }
}

function* ge(params) {
  yield 2;
  yield X(2);
  let x = yield X(1);
  return x;
}

function X(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(params);
      resolve(2);
    },2000);
  });
}
auto(ge);
let a = ge();
// console.log(a[Symbol.iterator]);
let b = a.next();
// console.log( b);
