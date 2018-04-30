class Person {
  static getName() {
    console.log(1);
  }
}

class Student extends Person{
  constructor(){
    // super();
  }
}
const s1 = new Student();
Student.getName(); // 必须super(); 才有效.
s1.getName(); // 报错