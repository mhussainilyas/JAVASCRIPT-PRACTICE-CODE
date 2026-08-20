// ============
// 🚀 Promises
// ============
// A Promise is a special object in JavaScript that represents a task that will finish in the future.

// ==========================
// 🎯 A promise has 3 states
// ==========================

// • Pending – still waiting
// • Resolved (fulfilled) – task completed
// • Rejected – something went wrong

// =============
// Example Code
// =============

// ***** 🚀 Resolve (fulfilled) *****

// let p1 = new Promise((resolve, reject) => {
//   resolve("data fetched successfully!");
// });

// console.log(p1);

// p1.then((res) => console.log(res));

// ***** 🚀 Reject (Rejected) *****

// let p1 = new Promise((resolve, reject) => {
//   reject("data isn't fetched successfully!");
// });

// console.log(p1);

// p1.catch((err) => console.error(err));

// ***** 🚀 Combined Example *****

// let p1 = new Promise((resolve, reject) => {
//   console.log("This is a promise");
//   // resolve({ name: "Hussain", age: 21 });
//   reject("something went wrong!");
// });

// p1.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.error(err);
// });

// ***** 🚀 Example Code *****

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(["Hussain", "Suleman", "Zaryab"]);
//   }, 3000);
// });

// p1.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.error(err);
// });

// ====================
// 🚀 Promise Chaining
// ====================

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ status: 200 });
//     }, 2000);
//   });
// }

// function fetchNewData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ status: 201 });
//     }, 2000);
//   });
// }

// fetchData()
//   .then((res) => {
//     console.log(res);
//     return fetchNewData();
//   })
//   .then((res) => {
//     console.log(res);
//     return fetchData();
//   })
//   .then((res) => {
//     console.log(res);
//     return fetchNewData();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// =====================
// 🚀 Real Wold Example
// =====================

// let response = fetch("https://jsonplaceholder.typicode.com/users");
// response
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
