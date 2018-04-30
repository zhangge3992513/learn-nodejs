const arr = [undefined, null];
const a = arr.find(item => item === undefined);// undefined  null
const a1 = arr[0];
console.log(a === arr[0], a1 === arr[0], typeof a1);

const a2 = [0, 1, 2].find(x => x === 0);
console.log(a2 === 0);
if (a2) {
  console.log(a2);
} else {
  console.log(a2, 'false');
}
if (a2 === 0) {
  console.log(a2);
} else {
  console.log(a2, 'false');
}

