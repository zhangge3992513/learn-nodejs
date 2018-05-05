function a(p1) {
  if (!this instanceof a) {
    return new a(p1);
  }
  console.log(p1);
}
// ! 失败
a.prototype.b = function (p2) {
  console.log(p2);
  return this;
}
console.log(a(1));
a('123').b(234).a(345);
