/* function auto(fnGe) {
  let a = fnGe();
  let b = a.next();
  if(b.value instanceof Promise){// typeof b.value === 'Promise'
    b.value.then( data=>{
      b.next();
    });
  }
}
 */

/* function auto(fnGe) {
  if (fnGe instanceof Function) {
    const a = fnGe();
    if (!a.done) {
      auto(a.value);
    }
  } else {
    auto(a);
  }
} */

function auto(geFn) {
  if(!geFn.prototype.constructor === 'GeneratorFunction {}'){
    return;    
  }
  let a = geFn();
  autoIn(a);

  function autoIn(iterator) {
    if(!iterator[Symbol.iterator]){
      return;
    }
    let temp = iterator.next();
    if(temp.done){
      return ;
    }
    autoIn(temp.value);
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
      resolve(2);
    },2000);
  });
}
console.log(X(1) instanceof Promise);
console.log(typeof X, X instanceof Function);
console.log(typeof ge, ge instanceof Function);
console.log(typeof ge , 'GeneratorFunction', ge);
console.log(ge.prototype.constructor);
var a0 = ge(1);
console.log(a0[Symbol.iterator], {}[Symbol.iterator]);
auto(ge);
