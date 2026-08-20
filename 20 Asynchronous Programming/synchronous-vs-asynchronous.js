// ===========================
// 🚀 Synchronous Programming
// ===========================
// Synchronous code runs line by line. Each operation must complete before the next one starts.

// console.log("Task 01");
// console.log("Task 02");

// for (let i = 0; i < 100; i++) {
//   console.log(`Working on patch ${i + 1}`);
// }

// console.log("Task 04");
// console.log("Task 05");

// ============================
// 🚀 Asynchronous Programming
// ============================
// Asynchronous code can start a task and move on without waiting for it to finish.

// ****** 💡 Example 01 ******

// console.log("Task 01");
// console.log("Task 02");

// setTimeout(() => {
//   for (let i = 0; i < 100; i++) {
//     console.log(`Working on patch ${i + 1}`);
//   }
// }, 1000);

// setTimeout(() => {
//   console.log("Task 03");
// }, 1000);

// console.log("Task 04");
// console.log("Task 05");

// ****** 💡 Example 02 ******
// ✔ total time to execute this code is 7 seconds.

// setTimeout(() => {
//   console.log("Washing clothes");
// }, 7000);

// setTimeout(() => {
//   console.log("Making rice");
// }, 3000);

// setTimeout(() => {
//   console.log("cleaning room");
// }, 6000);
