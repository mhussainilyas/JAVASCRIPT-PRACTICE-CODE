// ========================
//     Literal method
// ========================

// let marks = [10, 20, 30, 40];
// let colors = ["red", "green", "blue"];
// let personDetail = ["Hussain", 21, "Lahore", false];

// ===========================
//     Constructor method
// ===========================

// let arr = new Array("Hussain", "Suleman", "Zaryab");
// console.log(arr);

// ===== 💡 use case =====
// let data = new Array(20).fill(0);
// let data2 = new Array(20).fill("Unknown");
// console.log(data);

// ========================
//       typeof Array
// ========================

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof arr);  // Object

// =======================
//     Array Indexing
// =======================

// let arr = ["Hussain", "Suleman", "Zaryab", "Hamid"];

// ===== 💡 Accessing element =====
// let elem1 = arr[0];
// let elem2 = arr[1];
// let elem3 = arr[2];
// console.log(elem3);

// ===== 💡 Updating element =====
// arr[1] = "Suleman Amjad";
// arr[2] = "Zaryab Haider";
// console.log(arr);

// ===== 💡 Deleting element =====
// delete arr[3];
// console.log(arr);

// =======================
//     Loop Over Array
// =======================

// let marks = [10, 20, 30, 40, 50];

// ===== 💡 for loop =====
// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// ===== 💡 for...of loop =====
// for (let val of marks) {
//   console.log(val * val);
// }

// ===== 💡 for...in loop =====
// for (let index in marks) {
//   console.log(`${index}: ${marks[index]}`);
// }

// ===========================
//     Array type coersion
// ===========================

let str = "hussain";
let num = 21;
let obj = { name: "suleman", age: 21 };
let arr = ["zaryab", 20, false];

// ===== 💡 Check Array or not =====
// console.log(Array.isArray(str)); // false
// console.log(Array.isArray(arr)); // true

// ===== 💡 convert string to array =====
// let newArr = Array.from(str);
// console.log(newArr);

// ===== 💡 convert any datatype to array =====
let newArr = Array.of(str, num, obj, arr);
console.log(newArr);
