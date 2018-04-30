const map = new Map();
const obj = { a: 1 };
map.set(obj, 1);
console.log(map, map.get({ a: 1 }), map.get(obj));
