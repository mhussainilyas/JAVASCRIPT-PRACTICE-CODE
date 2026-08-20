// ============================================
// 🚀 Why Do We Get a Promise Instead of Data?
// ============================================
// 💡 You get a Promise — not the real data — because the data isn't ready yet.

// async function fetchData(url) {
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
// }

// fetchData("https://jsonplaceholder.typicode.com/users");

// console.log("Some other work to do...");
// console.log("Some other task to complete...");
