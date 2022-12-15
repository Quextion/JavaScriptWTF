//面向对象设计的思维：(抽象和封装)
//抽象共性进行拓展 extends
//封装是面向对象语言的核心

//类 -> js没有类
//原型链->模拟类->实现以面向对象编程思路

class Student {
  constructor(sex, name, major) {
    this.sex = sex;
    this.name = name;
    this.major = major;
  }

  skill() {
    console.log("学习" + this.major);
  }
}

var s1 = new Student("male", "jack", "cs");
s1.skill();
s1.hobby = "music";

var s2 = new Student("female", "lucy", "English");
s2.skill();

//es6语法糖
// console.log(Object.getPrototypeOf(s1));