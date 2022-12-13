//key:字符串      
var person1 = {
  age: 28,
  hobby: "学习",
  son: {
    age: 3,
    hobby: "drink milk",
    friends: ['jack', 'lucy']
  }
}


// function clone1(obj) {
//   return obj;
// }
// var clonePerson = clone1(person1);
// console.log(clonePerson);
// console.log(clonePerson === person1);



//in会读原型链可枚举的属性
//浅拷贝
function clone2(obj) {
  var clonePerson = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // 为什么不用clonePerson.key
    // 读对象的属性 1.  person.age   person[age]
    clonePerson[key] = obj[key];
  }
  return clonePerson;
}
var newPerson = clone2(person1)

newPerson.son.age = 100;
console.log(person1.son.age);


// var clonePerson = clone2(person1);
// console.log(clonePerson);
// console.log(clonePerson === person1);
// clonePerson.son.age = 100;
// console.log(clonePerson);
// console.log(person1);


//-------------------------深拷贝
function clone3(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  var clone = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      //obj[key]; -> 新建 -> 新对象的地址
      clone[key] = clone3(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

// var clonePerson = clone3(person1);
// console.log(clonePerson === person1);
// clonePerson.son.age = 100;
// clonePerson.son.friends = ['tom'];
// console.log(clonePerson);
// console.log(person1);