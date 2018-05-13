
var obj = {

  val:100,
  get getval(){
      return this.val;
  },
  set setval(x){
    console.log(x, '赋值');
      this.val = x;
  },
  /* set val(x){
    console.log(x, '赋值2');
      this.val = x;
  } 无线递归了*/
}

console.log(obj.getval);
obj.setval = 101;
console.log(obj.getval);

console.log(obj.val);
obj.val = 111;
console.log(obj.val);

//demo2

var obj2 = {

  val:200
}

obj2.__defineGetter__('name',function(){return this.val});
obj2.__defineSetter__('name',function(name){this.val = name;})

console.log(obj2.name)
obj2.name = 201;
console.log(obj2.name);