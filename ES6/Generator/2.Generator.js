function* A(x) {
  const y = yield x;
  const z = yield y + 12;
  return z;
}

for (const iterator of A(1)) {
  console.log(iterator);
}

function* B(x) {
  const y = yield 1;
  const z = yield 1 + 12;
  return z;
}

for (const iterator of B(1)) { // 返回的是yield表达式右边的值
  console.log(iterator);
}
console.log('=====end');