// ========================
//      Question # 01
// ========================
// 💡 Create a function that returns the last element of an array.

// function getLastElement(arr) {
//   return arr[arr.length - 1];
// }

// let strArr = ["Hussain", "Suleman", "Zaryab"];
// let numArr = [10, 20, 30, 40, 50, 60, 70];

// console.log(getLastElement(strArr));
// console.log(getLastElement(numArr));

// ========================
//      Question # 02
// ========================
// 💡 Find the combination of two arrays.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6, 7];
// let arr3 = ["Hussain", "Suleman", "Zaryab"];

// 1st method
// let combinedArr = arr1.concat(arr2, arr3);

// 2nd method
// let combinedArr = [...arr1, ...arr2, ...arr3];

// console.log(combinedArr);

// ========================
//      Question # 03
// ========================
// 💡 Generate a random integer between 0 to 18.

// let num = Math.floor(Math.random() * 19);

// console.log(num);

// ========================
//      Question # 04
// ========================
// 💡 Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.

// function getStringValues(arr) {
//   let newArr = arr.filter((elem) => {
//     return typeof elem === "string";
//   });

//   return newArr;
// }

// let mixArr = [10, "Hussain", 2, true, 100, "Suleman", 20, "Zaryab"];

// console.log(getStringValues(mixArr));

// ========================
//      Question # 05
// ========================
// 💡 Find the maximum number in an array.

// let arr = [1, 2, 5, 3, 8, 10, 28, 9];

// let maxNum = Math.max(...arr);

// console.log(maxNum);

// ========================
//      Question # 06
// ========================
// 💡 Write a function that returns the length of a given object (number of keys).

// let student = {
//   name: "Hussain",
//   department: "CS",
//   rollNo: 126177,
//   semester: 4,
//   age: 21,
// };

// function getObjLength(obj) {
//   return Object.keys(obj).length;
// }

// console.log(`Length of object is: ${getObjLength(student)}`);

// ========================
//      Question # 07
// ========================
// 💡 In an array of objects filter out those objects which have gender's value male.

// let userData = [
//   { name: "Hussain", age: 21, gender: "male" },
//   { name: "Javeria", age: 17, gender: "female" },
//   { name: "Zainab", age: 14, gender: "female" },
//   { name: "Ayan", age: 4, gender: "male" },
//   { name: "Zahra", age: 3, gender: "female" },
// ];

// let maleUsers = userData.filter((user) => {
//   return user.gender === "male";
// });

// console.log(maleUsers);

// ========================
//      Question # 08
// ========================
// 💡 Given an array of strings, return a new array where all strings are in uppercase.

// let strArr = ["Hussain", "Suleman", "Zaryab"];

// let upperStrArr = strArr.map((str) => {
//   return str.toUpperCase();
// });

// console.log(upperStrArr);

// ========================
//      Question # 09
// ========================
// 💡 Check if an object is empty (has no keys).

// let obj = {};

// function isObjEmpty(obj) {
//   if (Object.keys(obj).length > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isObjEmpty(obj));

// ========================
//      Question # 10
// ========================
// 💡 Create an array of numbers and double each value using .map().

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let doubleNumArr = numArr.map((num) => {
//   return num * 2;
// });

// console.log(doubleNumArr);

// ========================
//      Question # 11
// ========================
// 💡 Convert an array of strings into a single comma-separated string.

// let strArr = ["Hussain", "Suleman", "Zaryab"];

// 1st method
// let commaSeparatedStr = strArr.toString();

// 2nd method
// let commaSeparatedStr = strArr.join();

// console.log(commaSeparatedStr);

// ========================
//      Question # 12
// ========================
// 💡 Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// let arr = [1, [2, [2.5], 3], 4];

// let flattenArr = arr.flat(1);

// console.log(flattenArr);

// ========================
//      Question # 13
// ========================
// 💡 Write a function that checks if all elements in an array are numbers.

// let mixArr = [1, 2, 10];
// let mixArr = [1, 2, "Hussain", false, 10];

// 1st method (Recommended)
// function isNumArr(arr) {
//   return arr.every((item) => {
//     return typeof item === "number";
//   });
// }

// 2nd method
// function isNumArr(arr) {
//   let isNum = true;

//   arr.forEach((item) => {
//     if (typeof item !== "number") {
//       isNum = false;
//     }
//   });

//   return isNum;
// }

// console.log(isNumArr(mixArr));

// ========================
//      Question # 14
// ========================
// 💡 Build a simple isPrime() function to check if a number is prime.

// let num = 371;

// function isPrime(num) {
//   let flag = true;

//   if (num < 2) {
//     flag = false;
//     console.log("Too small number!");
//   } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         flag = false;
//         console.log(`${num} is divisible by ${i}`);
//         break;
//       }
//     }
//   }

//   return flag;
// }

// console.log(isPrime(num));

// ========================
//      Question # 15
// ========================
// 💡 Create a function that removes duplicate values from an array.

// 1st method
// function removeDuplicateValue(arr) {
//   let set = new Set(arr);
//   return [...set];
// }

// 2nd method
// function removeDuplicateValue(arr) {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// }

// let res = removeDuplicateValue([1, 2, 2, 3, 5, 2, 4, 1]);
// console.log(res);
