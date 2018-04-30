/* function auto(geFn) {
  if(!geFn.prototype.constructor === 'GeneratorFunction {}'){
    throw new Error('参数错误'); 
  }
  let a = geFn(); // {}, {}.prototype.next();
  autoIn(a);

  function autoIn(iterator, valuePre) {
    if(iterator.done){
      return 0;
    }
    let temp = iterator.next(valuePre);
    console.log(iterator,temp.value);
    if(temp.value instanceof Promise ){
      temp.value.then(data => {
        autoIn(iterator, data);
      });
    }else{
      autoIn(iterator, temp.value);
    }   
  }
}
 */
function auto(geFn) {
  const a = geFn();
  autoIn(a);
  function autoIn(next, value) {
    const obj = next.next(value); // {value:'', done: bool}
    console.log(obj.value);
    if (obj.done) {
      return obj.value;
    } else if (obj.value instanceof Promise) {
      obj.value.then(data => autoIn(next, data));
    } else {
      autoIn(next, obj.value);
    }
    // autoIn(next, obj.value);
  }
}


function* ge(x) {
  yield X(22);
  yield 2;
  return x;
}

function X(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(123);
      resolve(3);
    },2000);
  });
}
auto(ge);
let a = ge();
// console.log(a[Symbol.iterator]);
let b = a.next();
// console.log( b);
