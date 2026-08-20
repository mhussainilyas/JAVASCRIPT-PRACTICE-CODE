// =================
// 🚀 async / await
// =================
// ❑ async : Makes a function always return a Promise.
// ❑ await : Pauses inside an `async` function until the Promise is resolved.
// async / await helps you write asynchronous code in a cleaner, more readable way — almost like it's synchronous.

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "hussain", data: data });
//     }, 3000);
//   });
// }

// async function fetchData() {
//   let data = await getData(7);
//   console.log(data);
//   let data1 = await getData(14);
//   console.log(data1);
//   let data2 = await getData(21);
//   console.log(data2);
//   let data3 = await getData(28);
//   console.log(data3);
// }

// fetchData();

// ***** 🎯 Example Code *****

// async function getData(api_url) {
//   let response = await fetch(api_url);
//   let data = await response.json();
//   console.log(data);
// }

// getData("https://jsonplaceholder.typicode.com/users");
