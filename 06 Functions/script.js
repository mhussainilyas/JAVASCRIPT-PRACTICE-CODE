// =========================
//      Basic Function
// =========================

// function alpha() {
//   console.log("Hello Bhai!");
// }

// alpha();

// =========================
//      return Function
// =========================

// function beta() {
//   let name = "Muhammad Hussain";
//   return name;
// }

// let result = beta();
// console.log(result);

// ==================================
//      Function with parameters
// ==================================

// function greet(name) {
//   console.log("Hye!" + " " + name);
// }

// greet("Hussain");
// greet("Suleman");

// function greet(name) {
//   return "Hye!" + " " + name;
// }

// let res1 = greet("Hussain");
// let res2 = greet("Suleman");
// console.log(res1);
// console.log(res2);

// ========================================
//      Default parameters in Function
// ========================================

// function greet(name = "agent") {
//   console.log(name);
// }

// greet();
// greet("Hussain");

// ==================================
//        Types Of Functions
// ==================================

// ***** Default Function *****

// function sum(a, b) {
//   return a + b;
// }

// let res = sum(10, 20);
// console.log(res);

// ***** Function Expression *****

// let sum2 = function (a, b) {
//   return a + b;
// };

// let res2 = sum2(10, 20);
// console.log(res2);

// let sum3 = (a, b) => {
//   return a + b;
// };

// let res3 = sum3(10, 20);
// console.log(res3);

// ***** Arraw Function *****

// const getSum = (a, b) => {
//   return a + b;
// };

// console.log(getSum(20, 100));

// ***** Anonymous Function *****

// setTimeout(function () {
//   console.log("Hye! Developer");
// }, 2000);

// setTimeout(() => {
//   console.log("Hye! Developer");
// }, 2000);

// const add = (a, b) => {
//   return a + b;
// };

// setTimeout(() => {
//   let res = add(100, 200);
//   console.log(res);
// }, 3000);

// ***** Immediately Invoked Function Expression (IIFE) *****

// (function () {
//   console.log("Hye! Developer");
// })();

// ((a, b) => {
//   let result = a + b;
//   console.log(result);
// })(100, 200);

// ((name, age) => {
//   let result = `Hye! I'm ${name} and I'm ${age} years old`;
//   console.log(result);
// })("Hussain", 21);
