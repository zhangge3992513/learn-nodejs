function a1(x = 1, y = 2) {
  console.log(x, y);
}
a1();

function a2(x, y) {
  x = x || 1;
  y = y || 2;
  console.log(x, y);
}
a2();

