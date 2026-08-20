// ============
// 🚀 Callback
// ============
// 💡 A Callback is a function passed as an argument to another function
// Callbacks help us deal with tasks that take time, like loading data from a server, without blocking other code from running.

// ***** Example 01 *****

// function printName(name) {
//   console.log(`Hye! ${name}`);
// }

// function showName(name, callback) {
//   callback(name);
// }

// showName("Muhammad Hussain", printName);

// ***** Example 02 *****

// function calculate(a, b, callback) {
//   callback(a, b);
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// function subtract(a, b) {
//   console.log(a - b);
// }

// function multiply(a, b) {
//   console.log(a * b);
// }

// calculate(10, 5, sum);
// calculate(10, 5, subtract);
// calculate(10, 5, multiply);

// ***** Example 03 *****

// console.log("1. Fetching data...");

// function fetchData(processData) {
//   setTimeout(() => {
//     console.log("2. Data fetch ho chuka ha");
//     processData();
//   }, 4000);
// }

// function processData() {
//   console.log("3. Processing with data...");
// }

// fetchData(processData);

// console.log("4. Some other tasks...");
