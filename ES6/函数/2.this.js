// 匿名函数中的this, 浏览器指向window对象, Node.js大部分指向global对象,
//  settimeout中的this, Ndoe指向timeOut对象, Chrome浏览器是 window对象.
// global a = 123;
global.a = 123;
console.log(global.a);
setTimeout(() => {
  console.log(this.a);
});
(() => {
  console.log(this.a, '匿名函数箭头'); // undefined
})();

(function() {
  console.log(this.a, '匿名函数正常'); // 123
})();
