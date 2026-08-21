// =================
// 🚀 Rest Operator
// =================
// use three dots (...) syntax
// Rest operator collects/packs values into a single array.

// function sum(...nums) {
//   console.log(nums);
// }

// sum(1, 2, 3, 4, 5);

// ***** 💡 Example Code *****

// function sum(...nums) {
//   return nums.reduce((acc, num) => {
//     return acc + num;
//   });
// }

// let result = sum(1, 2, 3, 4, 5);
// console.log(result);

// ***** 💡 Rest with Destructuring Array *****

// const arr = [100, 200, 300, 400];
// const [first, ...rest] = arr;
// console.log(first);
// console.log(rest);

// ***** 💡 Rest with Destructuring Object *****

// const user = { name: "hussain", age: 21, isMarried: false };
// const { name, ...others } = user;
// console.log(name);
// console.log(others);
