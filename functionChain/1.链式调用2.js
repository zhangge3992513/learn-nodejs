function a(p1) {

}

a.prototype.b = function (p2) {
  console.log(p2);
  return this;
}
a.prototype.c = function (p3) {
  console.log(p3);
  return this;
}

const obj1 = new a();
obj1.b(1).c(2);
