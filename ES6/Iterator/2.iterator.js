const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
const a = new obj[Symbol.iterator]();
console.log(a.next());
for (const iterator of obj) {
  console.log(iterator);
}
