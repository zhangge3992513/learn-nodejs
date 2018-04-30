// Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环。
// 当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。
/* Iterator 的遍历过程是这样的。

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

 */

const a = {
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next: () => i++,
    };
  },
};
// a.next();
const obj = new a[Symbol.iterator]();
console.log(obj);
console.log(obj.next());
