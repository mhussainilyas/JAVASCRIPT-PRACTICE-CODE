// ==========================
//          Loops
// ==========================

// 1) ********** for loop **********

// for (let i = 0; i < 10; i++) {
//   console.log("Muhammad Hussain");
//   console.log(i);
// }

// console.log(i); // ReferenceError: i is not defined

// for (var i = 0; i < 10; i++) {
//   console.log("Muhammad Hussain");
//   console.log(i);
// }

// console.log(i); // 10

// 2) ********** while loop **********

// let i = 0;
// while (i < 10) {
//   console.log("Muhammad Hussain");
//   console.log(i);
//   i++;
// }

// console.log(i); // 10

// 3) ********** do while loop **********

// let i = 1;
// do {
//   console.log("Muhammad Hussain");
//   console.log(i);
//   i++;
// } while (i < 1);

// console.log(i); // 2

// 4) ********** for...of loop (array, string etc) **********

// let str = "Muhammad Hussain Ilyas";

// for (let char of str) {
//   console.log(char);
// }

// 5) for...in loop (object)

// let str = "Muhammad Hussain Ilyas";

// for (let char in str) {
//   console.log(`${char}: ${str[char]}`);
// }

let obj = {
  fullName: "Muhammad Hussain",
  religion: "Islam",
  age: 21,
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
