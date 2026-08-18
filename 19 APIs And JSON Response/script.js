// =====================
// 🎯 Javascript Object
// =====================

// const data = {
//   id: 1,
//   name: "Hussain",
//   rollNo: 126177,
//   isStudent: true,
//   hobbies: ["coding", "reading", "playing"],
// };

// ================
// 🎯 JSON Formate
// ================
// It allow to store strings, numbers, booleans, null, objects, arrays.

// const data ={
//   "id": 1,
//   "name": "Hussain",
//   "rollNo": 126177,
//   "isStudent": true,
//   "hobbies": ["coding", "reading", "playing"]
// };

// ===================
// 🎯 How to use JSON
// ===================

// import data from "./data.json" with { type: "json" };
// console.log(data);

// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);

// === 💡 JSON.stringify(data) ===
// let stringFormate = JSON.stringify(data);
// console.log(stringFormate);

// === 💡 JSON.parse(stringFormate) ===
// let jsonFormate = JSON.parse(stringFormate);
// console.log(jsonFormate);

// ====================
// 🎯 Real API Example
// ====================

const fetchData = async (url) => {
  let response = await fetch(url);
  return response;
};

(async function getData() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/users");
  const jsonData = await data.json();
  console.log(jsonData);
})();
