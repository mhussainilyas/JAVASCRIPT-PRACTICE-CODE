// =======================
//    Foundation of OOP
// =======================

// 1. Object Literal
// 2. Factory Function
// 3. Constructor Function
// 4. Class Syntax (ES6)

// =======================
//    1. Object Literal
// =======================

// let user1 = { name: "Hussain", age: 21, greetFunc: introductionFunc };
// let user2 = { name: "Suleman", age: 22, greetFunc: introductionFunc };
// let user3 = { name: "Zaryab", age: 20, greetFunc: introductionFunc };

// function introductionFunc() {
//   console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
// }

// user1.greetFunc();
// user2.greetFunc();
// user3.greetFunc();

// =======================
//   2. Factory Function
// =======================

// function createUsers(userName, userAge, userSkill) {
//   return {
//     name: userName,
//     age: userAge,
//     skill: userSkill,
//     info: function () {
//       console.log(
//         `I'm ${this.name} and I'm ${this.age} years old and my skill is ${this.skill}`,
//       );
//     },
//   };
// }

// let user1 = createUsers("Suleman", 22, "Web Designing");
// let user2 = createUsers("Hussain", 21, "Wed Development");
// let user3 = createUsers("Zaryab", 20, "Wordpress Engineering");

// user1.info();
// user2.info();
// user3.info();

// =============================
//    3. Constructor Function
// =============================

// function Student(name, age, passion) {
//   this.name = name;
//   this.age = age;
//   this.passion = passion;
//   this.greet = function () {
//     console.log(`Hye! ${this.name}. Your field is ${this.passion}`);
//   };
//   return this;
// }

// === ❌ it is wrong, s2 overwrite the s1 data, don't create new memory location ===
// let s1 = Student("Hussain", 21, "Developer");
// let s2 = Student("Suleman", 22, "Data Analyst");
// console.log(s1);

// === ✔ it is correct, s1 and s2 are creates on separate memory locations individually ===
// === 🚀 "new" keyword is used to allocate new memory location that binds all the arguments and return a constructor object ===
// let s1 = new Student("Hussain", 21, "Computer Science");
// let s2 = new Student("Suleman", 22, "Data Analyst");
// console.log(s1);
// console.log(s2);
// s1.greet();
// s2.greet();

// =============================
//    4. Class Syntax (ES6)
// =============================
// 🚀 constructor
// A constructor is a special method within a class that is automatically called when a new object instance of that class is created. It is primarily used to initialize object properties with specific values.

// class Student {
//   constructor(name = "NONAME", age = 0, passion = "NULL") {
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//   }

//   intro() {
//     console.log(`Hye! I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// let s1 = new Student();
// let s2 = new Student("Hussain", 21, "Computer Science");
// console.log(s1);
// console.log(s2);
// s1.intro();
// s2.intro();
