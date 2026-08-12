// =====================
//    01) Declarative
// =====================
// 💡 Describe what should be done, not how.

// let arr = [1, 2, 3, 4, 5];
// let doubleArr = arr.map((item) => item * 2);
// console.log(doubleArr);

// ========================
//    02) Pure Functions
// ========================
// 💡 It returns the same output for the same input.

// === ❌ impure ===
// let total = 0;
// function sum(a, b) {
//   total += a + b;
// }

// console.log(total);

// === ✔ pure ===
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// ========================
//    03) Immutability
// ========================
// 💡 Do not modify existing data. Instead, return new copies.

// let obj = { name: "Hussain", age: 21 };

// === ❌ mutability ===
// function replaceName(name) {
//   obj.name = name;
// }

// replaceName("Zaryab");
// console.log(obj);

// === ✔ immutability ===
// function replaceName(name) {
//   return { ...obj, name: name };
// }

// console.log(obj);
// console.log(replaceName("Suleman"));

// === ✔ immutability ===
// let arr = [1, 2, 3, 4, 5];
// function removeLastItem(arr) {
//   return arr.slice(0, -1);
// }

// console.log(arr);
// console.log(removeLastItem(arr));

// ============================
//    04) Avoid Shared State
// ============================
// 💡 Shared mutable state can lead to bugs, especially in async or parallel systems.

// === ❌ shared state ===
// let total = 0;
// function sum(a, b) {
//   total += a + b;
// }

// console.log(total);

// === ✔ avoid shared state ===
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// =============================
//    05) Avoid Side Effects
// =============================
// 💡 Side effects are anything a function does outside its scope (API call, DOM update, modifying global vars).

// === ❌ side effect ===
// function greeting(name) {
//   console.log(name);
// }

// greeting("Suleman");

// === ❌ side effect ===
// function capitalizeFirstLetter(str) {
//   let res = str.charAt(0).toUpperCase() + str.slice(1);
//   console.log(res);
// }

// capitalizeFirstLetter("hussain");

// === ✔ no side effect ===
// function greeting(name) {
//   return `Hye! ${name} 😊`;
// }

// console.log(greeting("Hussain"));

// === ✔ no side effect ===
// function capitalizeFirstLetter(str) {
//   let res = str.charAt(0).toUpperCase() + str.slice(1);
//   return res;
// }

// console.log(capitalizeFirstLetter("hussain"));

// ================================
//    06) Reuse Or Compose Logic
// ================================
// 💡 Build small reusable functions and compose them together.

// let name = "Muhammad Hussain Ilyas";

// const toLowerStr = (str) => str.toLowerCase();
// const removeSpaces = (str) => str.replaceAll(" ", "");
// const strLength = (str) => str + str.length;
// const addAtTheRate = (str) => "@" + str;

// function createUsername(name) {
//   return addAtTheRate(strLength(removeSpaces(toLowerStr(name))));
// }

// console.log(createUsername(name));

// ======================================
//    07) Don’t Iterate (Imperatively)
// ======================================
// 💡 Avoid for, while, etc. Use map, filter, reduce.

// === ❌ imperative style ===
// let even = [];
// for (let n of [1, 2, 3, 4, 5, 6]) {
//   if (n % 2 === 0) {
//     even.push(n);
//   }
// }

// console.log(even);

// === ✔ declarative style ===
// let even = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0);
// console.log(even);

// =========================
//    08) Loose Coupling
// =========================
// 💡 Coupling refers to how dependent one piece of code is on another.
// 💡 Loose coupling means less dependent, Keep functions and modules independent.

// ****** Version 01 (❌ tightly coupled) ******

// function getPostData() {
//   return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     res.json(),
//   );
// }

// function getTodosData() {
//   return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
//     res.json(),
//   );
// }

// function getUsersData() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json(),
//   );
// }

// console.log(getPostData());
// console.log(getTodosData());
// console.log(getUsersData());

// ****** Version 02 (✔ Loosely coupled) ******

// let endPoint = "https://jsonplaceholder.typicode.com";

// function getPostData(endPoint) {
//   return fetch(`${endPoint}/posts`).then((res) => res.json());
// }

// function getTodosData(endPoint) {
//   return fetch(`${endPoint}/todos`).then((res) => res.json());
// }

// function getUsersData(endPoint) {
//   return fetch(`${endPoint}/users`).then((res) => res.json());
// }

// console.log(getPostData(endPoint));
// console.log(getTodosData(endPoint));
// console.log(getUsersData(endPoint));

// ****** Version 03 (✔✔✔ Loosely coupled) ******

// let endPoint = "https://jsonplaceholder.typicode.com";

// function getData(endPoint, route) {
//   return fetch(`${endPoint}/${route}`).then((res) => res.json());
// }

// console.log(getData(endPoint, "posts"));
// console.log(getData(endPoint, "todos"));
// console.log(getData(endPoint, "users"));

// ****** Version 04 (✔✔✔ Loosely coupled) + Endpoint Security ******

// function fetchData(func, route) {
//   let endPoint = "https://jsonplaceholder.typicode.com";
//   let data = func(endPoint, route);
//   return data;
// }

// function getData(endPoint, route) {
//   return fetch(`${endPoint}/${route}`).then((res) => res.json());
// }

// console.log(fetchData(getData, "posts"));
// console.log(fetchData(getData, "users"));
// console.log(fetchData(getData, "todos"));

// ****** Example 02 (✔✔✔ Loosely coupled) ******

// const user = {
//   name: "Hussain",
//   email: "hussainbscs2024@gmail.com",
//   phone: "+92 302 0133320",
// };

// function sendEmail(userObj) {
//   return `send message to: ${userObj.email}`;
// }

// function sendSms(userObj) {
//   return `send sms to: ${userObj.phone}`;
// }

// function sendToUser(userObj) {
//   return `send message to: ${userObj.name}`;
// }

// === 👇🏻👇🏻👇🏻 main general function ===
// function sendMessage(notifyFunc, userObj) {
//   console.log("Doing dome other tasks...");
//   console.log(notifyFunc(userObj));
// }

// sendMessage(sendEmail, user);
// sendMessage(sendSms, user);
// sendMessage(sendToUser, user);

// ======================================================================
//    First class function | Callback Function | Higher Order Function
// ======================================================================
// 💡 First-Class: Functions can be stored in variables, passed, and returned.
// 💡 Higher-Order: Functions that take other functions as arguments or return them.
// 💡 Callback: A function passed to another function to be executed later.

// === First-Class ===
function sendConfirmation() {
  console.log("Confirmation email sent!");
}

// === Higher-Order ===
function placeOrder(product, callbackFunc) {
  console.log(`Order placed for ${product}`);
  //  === Callback ===
  callbackFunc();
}

placeOrder("Laptop", sendConfirmation);
