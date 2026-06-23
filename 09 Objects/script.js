// =========================
//      Object Literals
// =========================

// let student = {
//   name: "hussain",
//   age: 21,
//   greet: function () {
//     console.log("Hye! Hussain");
//   },
// };

// console.log(student);

// =========================
//    Object Constructor
// =========================

// let student = new Object({
//   name: "hussain",
//   age: 21,
//   greet: function () {
//     console.log("Hye! Hussain");
//   },
// });

// console.log(student);

// ===================================
//    Object Properties and Methods
// ===================================

// const user = {
//   name: "hussain",
//   age: 21,
//   sum: (a, b) => {
//     return a + b;
//   },
//   greet: function () {
//     console.log("Hye! Hussain");
//   },
// };

// ===== 💡 accessing object property =====
// let prop1 = user.name;  // dot notation
// let prop2 = user["age"];  // bracket notation
// console.log(prop1);
// console.log(prop2);

// ===== 💡 accessing object method =====
// user.greet();
// let res = user.sum(10, 20);
// console.log(res);

// ===== 💡 adding new object property/method =====
// user.city = "Lahore";
// user.address = function () {
//   "Makhdoomabad, st#04, House#14-A";
// };
// console.log(user);

// ===== 💡 Updating new object property/method =====
// user.age = 20;
// user.greet = function () {
//   console.log("Assalam-o-alaikum!");
// };
// console.log(user.age);
// user.greet();

// ===== 💡 deleting new object property/method =====
// delete user.age;
// delete user.greet;
// console.log(user);

// =====================
//    "this" keyword
// =====================

// let obj = {
//   name: "hussain",
//   city: "lahore",
//   age: 21,
//   greet: function () {
//     console.log(`I'm ${this.name} and I'm ${this.age} years old`);
//   },
// };

// obj.futureAge = function () {
//   console.log(`${this.age + 1} years old next year.`);
// };

// obj.greet();
// obj.futureAge();

// ==========================
//    loop through objects
// ==========================

let obj = {
  name: "alpha",
  city: "lahore",
  age: 21,
};

for (let key in obj) {
  console.log(`${key} = ${obj[key]}`);
}
