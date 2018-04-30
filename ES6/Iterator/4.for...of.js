class My {
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return { done: false, value: new Date().toLocaleString() };
  }
}
const my1 = new My();
for (const iterator of my1) {
  console.log(iterator);
}

