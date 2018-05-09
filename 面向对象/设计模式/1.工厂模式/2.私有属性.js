function Person(name) {
  const privateProperties = {
    name,
  };
  this.setName = (name) => {
    privateProperties.name = name;
  };
  this.getName = () => privateProperties.name;
}

const obj = new Person('张三');
console.log(obj.getName());
