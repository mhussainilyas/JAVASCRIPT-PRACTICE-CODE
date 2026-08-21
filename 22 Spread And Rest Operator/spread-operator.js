// ===================
// 🚀 Spread Operator
// ===================
// use three dots (...) syntax
// Spread operator expands/unpacks values.

// let arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// ***** 💡 Spread Array *****

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr, 6, 7, 8];
// console.log(arr);
// console.log(newArr);

// ***** 💡 Copying Arrays (Shallow Copy) *****

// let arr = [1, 2, 3, 4, 5];
// let copyArr = [...arr];
// console.log(arr);
// console.log(copyArr);

// ***** 💡 Merging Arrays *****

// let arr1 = ["hussain", "suleman", "zaryab"];
// let arr2 = ["qadir", "mudassir", "hamid"];
// let mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);

// ***** 💡 Spread String *****

// let str = "Muhammad Hussain";
// let arr = [...str];
// console.log(arr);

// ***** 💡 Spread in function calls *****

// let nums = [1, 2, 3];

// function add(a, b, c) {
//   return a + b + c;
// }

// let result = add(...nums);
// console.log(result);

// ***** 💡 Spread Objects *****

// const user = { name: "hussain", age: 21 };
// const copyUser = { ...user, city: "lahore" };
// console.log(updatedUser);
// console.log(user);

// ***** 💡 Merging Objects *****

// let obj1 = { name: "hussain", age: 21 };
// let obj2 = { city: "lahore", lifePartner: "jerry" };
// let mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);
