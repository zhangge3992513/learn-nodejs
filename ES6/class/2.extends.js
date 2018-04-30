function A(params) {
  this.getname = function (params) {
    console.log(1);
  }
}
function B(params) {
  A.call(this);
}
B.prototype = new A(); // 不好
B.prototype.contructor = 'B';
const b1 = new B();
b1.getname();

function C(params) {
  A.call(this);
}
C.prototype = Object.create(A.prototype);
C.prototype.contructor = 'C';
const c1 = new C();
c1.getname();
