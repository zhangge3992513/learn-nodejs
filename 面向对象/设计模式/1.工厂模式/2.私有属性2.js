class Person {
  // const privateProperties ={};
  constructor(name) {
    const privateProperties = {}; // 保存私有属性
    privateProperties.name = name;
    this.setName = (name) => {
      privateProperties.name = name;
    };
    this.getName = () => privateProperties.name;
  }
  /* setName(name) {
    privateProperties.name = name;
  }
  getName(){
    return privateProperties.name;
  } */
}

const obj2 = new Person('张三2');
const obj = new Person('张三');
console.log(obj.getName(), obj2.getName());
console.log(obj);

