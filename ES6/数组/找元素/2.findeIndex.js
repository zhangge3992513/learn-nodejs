// 数组实例的findIndex方法的用法与find方法非常类似，
// 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
const a1 = [1, 5, 10, 15].findIndex((value, index, arr) => value > 9); // 2
console.log(a1);
