// ======================
//     Question # 37
// ======================
// 💡 What is a pure function, and why is it useful in UI rendering?

// === Answer ===
// A pure function is a function that:
// Always returns the same output for the same input.
// Has no side effects—it doesn't modify external state, perform I/O, or change data outside itself.

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(100, 300));

// === Why this matters for UI rendering ===
// UI rendering is essentially a function that turns state/data → UI
// state + props → UI
// If rendering is pure, the framework can safely:
// Re-render whenever state or props change without worrying about hidden side effects.
// Compare outputs to determine what actually needs to change on screen.

// ======================
//     Question # 38
// ======================
// 💡 How would you use .map() to transform a list of products into a list of HTML elements?

// let products = [
//   { id: 1, name: "laptop", price: 32_000 },
//   { id: 2, name: "computer", price: 48_000 },
//   { id: 3, name: "mobile", price: 19_500 },
//   { id: 4, name: "tablet", price: 27_999 },
//   { id: 5, name: "keyboard", price: 1_300 },
// ];

// let listOfHTMLElements = products.map((item) => {
//   let div = document.createElement("div");

//   div.innerHTML = `
//     <p>Product Name: ${item.name}</p>
//     <p>Product Price: ${item.price}</p>
//   `;

//   return div;
// });

// console.log(listOfHTMLElements);

// ======================
//     Question # 39
// ======================
// 💡 How do you use .reduce() to calculate the total price in a shopping cart?

// let arr = [1, 2, 3, 4, 5];

// let total = arr.reduce((acc, item) => {
//   return (acc += item);
// }, 0);

// console.log(total);

// ======================
//     Question # 40
// ======================
// 💡 Explain immutability and how you would update an object in an array without mutating the original.

// === Answer ===
// Immutability means do not modify existing data. Instead, return new copies.

// let user = { id: 1, name: "hussain", age: 21 };

// function updateName(obj, newName) {
//   return { ...obj, name: newName };
// }

// let newUser = updateName(user, "suleman");
// console.log(newUser);
// console.log(user);

// ======================
//     Question # 41
// ======================
// 💡 How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim → capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function composition, chaining, pipe or compose logic.)

// ****** Function Chaining ******

// let str = "hussain";
// let reverseStr = str.split("").reverse().join("");
// console.log(reverseStr);

// ****** Function Composition (classic) ******

// const add2 = (num) => num + 2;
// const multiply5 = (num) => num * 5;
// const subtract4 = (num) => num - 4;

// let result = subtract4(multiply5(add2(6)));
// console.log(result);

// ****** Compose (right to left) ******

// const add2 = (num) => num + 2;
// const multiply5 = (num) => num * 5;
// const subtract4 = (num) => num - 4;

// function composeFunc(...funcs) {
//   return function (val) {
//     return funcs.reduceRight((acc, currFunc) => {
//       return currFunc(acc);
//     }, val);
//   };
// }

// let result = composeFunc(subtract4, multiply5, add2)(6);
// console.log(result);

// ****** Pipe (left to right) ******

// const add2 = (num) => num + 2;
// const multiply5 = (num) => num * 5;
// const subtract4 = (num) => num - 4;

// function pipeFunc(...funcs) {
//   return function (val) {
//     return funcs.reduce((acc, currFunc) => {
//       return currFunc(acc);
//     }, val);
//   };
// }

// let result = pipeFunc(subtract4, multiply5, add2);
// console.log(result(6));

// ======================
//     Actual Example
// ======================

// let str = "    hu ss ain   ";

// const trimingStr = (str) => str.trim();
// const sanitizeStr = (str) => str.replaceAll(" ", "");
// const capitalizeStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// ****** Function Composition (classic) ******

// let result = capitalizeStr(sanitizeStr(trimingStr(str)));
// console.log(result);

// ****** Compose (right to left) ******

// function composeStr(...funcs) {
//   return function (str) {
//     return funcs.reduceRight((acc, currFunc) => {
//       return currFunc(acc);
//     }, str);
//   };
// }

// let result = composeStr(capitalizeStr, sanitizeStr, trimingStr);
// console.log(`compose result = ${result(str)}`);

// ****** Compose (right to left) ******

// function pipeStr(...funcs) {
//   return function (str) {
//     return funcs.reduce((acc, currFunc) => {
//       return currFunc(acc);
//     }, str);
//   };
// }

// let result = pipeStr(trimingStr, sanitizeStr, capitalizeStr);
// console.log(`pipe result = ${result(str)}`);

// ======================
//     Question # 42
// ======================
// 💡 What is the difference between forEach and map, and when is it wrong to use map?

// === Answer ===
// forEach ka purpose hai array ke har element par koi action perform karna.
// map ka purpose hai har element ko transform karke ek naya array bana kar return karna.

// === Kab map use karna wrong hai? ===
// Jab tum new array banana nahi chahte, sirf koi side effect/action perform karna chahte ho.

// ======================
//     Question # 43
// ======================
// 💡 How do you implement your own version of .map() function on arrays?

let arr = [1, 2, 3, 4, 5];

const square = (num) => num * num;
const cube = (num) => num * num * num;
const diameter = (num) => 2 * num;

// ****** Logic Separation ******

// function calculate(arr, logicFunc) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(logicFunc(arr[i]));
//   }

//   return newArr;
// }

// let result = calculate(arr, square);
// let result1 = calculate(arr, cube);
// let result2 = calculate(arr, diameter);
// console.log(result);
// console.log(result1);
// console.log(result2);

// ****** Create your own map function ******

Array.prototype.ownMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

// let res = arr.ownMap(square);
// let res1 = arr.ownMap(cube);
// let res2 = arr.ownMap(diameter);

let res = arr.ownMap((num) => {
  return num * num;
});

let res1 = arr.ownMap((num) => {
  return 2 * num;
});

let res2 = arr.ownMap((num) => {
  return num * num * num;
});

console.log(res);
console.log(res1);
console.log(res2);
