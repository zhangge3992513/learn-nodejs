function* A(x) {
  const y = yield x;
  const z = yield y + 12;
  return z;
}

const a = A(1);
console.log(a.next());
console.log(a.next(1));
console.log(a.next(1));
console.log('==========');

function* B(x) {
  const y = yield x;
  const z = y + 12;
  return z;
}

const b = B(1);
console.log(b.next());
console.log(b.next(1));

