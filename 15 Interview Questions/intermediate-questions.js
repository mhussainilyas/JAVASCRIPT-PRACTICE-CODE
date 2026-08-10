// ======================
//     Question # 16
// ======================
// 💡 What’s the difference between parseInt() and parseFloat() and Number()?

// console.log(Number("123.3453"));
// console.log(Number.parseInt("123.3453"));
// console.log(Number.parseFloat("123.3453"));

// console.log(Number("123.345px"));
// console.log(Number.parseInt("123.345px"));
// console.log(Number.parseFloat("123.345px"));

// ======================
//     Question # 17
// ======================
// 💡 Number System conversion with parseInt() and toString()?

// *** Number.parseInt("stringNumber", radix) ***
// Convert any base number (Hex, Octal, Binary) ➡ decimal

// console.log(Number.parseInt("1110", 2));
// console.log(Number.parseInt("17", 8));
// console.log(Number.parseInt("2A", 16));

// *** num.toString(base) ***
// Convert decimal ➡ any base number (Hex, Octal, Binary)

// let decimalNum = 255;

// console.log(decimalNum.toString(2));
// console.log(decimalNum.toString(8));
// console.log(decimalNum.toString(16));

// ======================
//     Question # 18
// ======================
// 💡 Why does 0.1 + 0.2 !== 0.3 in JavaScript?
// 💡 Explain floating-point precision issues in JavaScript.

// console.log(0.1 + 0.2 === 0.3);
// console.log(`0.1 + 0.2 = ${0.1 + 0.2}`);

// ==========================================
//     Question # 19 (decimal.js) library
// ==========================================
// 💡 How would you handle high-precision decimal math in JS?
// ✔ Hint: using library "decimal.js"

// === ✔ 1st method ===
// let sum = Number((0.1 + 0.2).toFixed(2));
// console.log(sum === 0.3);

// === ✔ 2nd method ===
// let Decimal = require("decimal.js");
// let num1 = Decimal(0.1);
// let num2 = Decimal(0.2);
// console.log(num1, typeof num1); // 0.1 object
// console.log(num2, typeof num2); // 0.2 object
// let sum = num1.plus(num2);
// console.log(Number(sum));
// console.log(Number(sum) === 0.3);

// ======================
//     Question # 20
// ======================
// 💡 What is the difference between slice and splice?

// slice(start, end)
// work with string and array
// don't change original string or array
// let str = "Hussain";
// let strRes = str.slice(-4, 6);
// let strRes = str.slice(1);
// let arr = [1, 2, 3, 4, 5];
// let arrRes = arr.slice(-5, 3);
// let arrRes = arr.slice(1);
// console.log(arrRes);

// splice(start, delete, val1, val2,...);
// works with only arrays
// change original array
// let arr = [1, 2, 3, 4, 5];
// let delElem = arr.splice(1, 2, "x", "y");
// let delElem = arr.splice(-4, 2, "x", "y");
// console.log(delElem);
// console.log(arr);

// ======================
//     Question # 21
// ======================
// 💡 Create a function that reverse each word of a given sentence. E.g., Mai hun hussain → niassuh nuh iaM

// let str = "Mai hun Hussain";

// function reverseSentence(str) {
//   let res = str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .reverse()
//     .join(" ");
//   return res;
// }

// console.log(reverseSentence(str));

// ======================
//     Question # 22
// ======================
// 💡 In an array of numbers and strings, only add those numbers which are not strings.

// let add = 0;
// let mixArr = [10, "123", 27, 98, "100", "243"];

// mixArr.forEach((item) => {
//   if (typeof item === "number") {
//     add += item;
//   }
// });

// console.log(`sum of numbers is ${add}`);

// ======================
//     Question # 23
// ======================
// 💡 How would you check if a number is an integer?

// let num = 100;
// let num = 198.42;

// 1st method
// let res = Number.isInteger(num);

// 2nd method
// let isInteger = num % 1 === 0;

// console.log(isInteger);

// ======================
//     Question # 24
// ======================
// 💡 Write a JavaScript function that reverse a number.

// let num = 35426;

// let reverseNum = Number(num.toString().split("").reverse().join(""));

// console.log(reverseNum);

// ======================
//     Question # 25
// ======================
// 💡 Write a javascript function that returns a passed string with letters in alphabetical order.

// let str = "i am muhammad hussain ilyas";

// function alphabeticOrderStr(str) {
//   return str.split(" ").sort().join(" ");
// }

// console.log(alphabeticOrderStr(str));

// ======================
//     Question # 26
// ======================
// 💡 Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// let str = "hye i am muhammad hussain ilyas";

// function capitalizeStr(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeStr(str));

// ======================
//     Question # 27
// ======================
// 💡 Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function getFirstElement(arr, n) {
//   if (!n) {
//     return arr[0];
//   } else if (n > arr.length) {
//     console.error("value is out of bound!");
//     return -1;
//   } else {
//     return arr.slice(0, n);
//   }
// }

// console.log(getFirstElement(arr));
// console.log(getFirstElement(arr, 5));
// console.log(getFirstElement(arr, 10));

// ======================
//     Question # 28
// ======================
// 💡 Write a javascript function to get the number of occurrences of each letter in specified string.

// let str = "Muhammad Hussain Ilyas";

// function numberOfOccurrences(str) {
//   let freqObj = {};
//   let arr = str.replaceAll(" ", "").split("");

//   arr.forEach((letter) => {
//     if (freqObj.hasOwnProperty(letter)) {
//       freqObj[letter] = freqObj[letter] + 1;
//     } else {
//       freqObj[letter] = 1;
//     }
//   });

//   for (let key in freqObj) {
//     console.log(`${key} occurs ${freqObj[key]} times`);
//   }
// }

// numberOfOccurrences(str);

// ======================
//     Question # 29
// ======================
// 💡 write a javascript program to find the most frequent item of an array.

// let arr = [1, 2, 3, 4, 2, 5, 3, 2, 5, 4, 7, 8, 1, 3];

// function getMostFreqItem(arr) {
//   let freqObj = {};

//   arr.forEach((item) => {
//     if (freqObj.hasOwnProperty(item)) {
//       freqObj[item] = freqObj[item] + 1;
//     } else {
//       freqObj[item] = 1;
//     }
//   });

//   let maxFreq = Math.max(...Object.values(freqObj));

//   let freqObjArr = Object.entries(freqObj);
//   let freqArr = freqObjArr.filter((arr) => arr[1] === maxFreq);

//   console.log("the most frequent items of an array: ");
//   freqArr.forEach((arr) => {
//     console.log(arr[0]);
//   });
// }

// getMostFreqItem(arr);

// ======================
//     Question # 30
// ======================
// 💡 write a javascript program to shuffle an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// === 👉 shuffle original array ===
// function shuffleArr(arr) {
//   for (let index in arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);

//     // === 1st method of swaping ===
//     // let temp = arr[index];
//     // arr[index] = arr[randomIndex];
//     // arr[randomIndex] = temp;

//     // === 2nd method of swaping ===
//     [arr[randomIndex], arr[index]] = [arr[index], arr[randomIndex]];
//   }

//   return arr;
// }

// === 👉 return new array by shuffling original array ===
// function shuffleArr(arr) {
//   let newArr = [];
//   let tempArr = [...arr];

//   while (tempArr.length > 0) {
//     let randomIndex = Math.floor(Math.random() * tempArr.length);
//     newArr.push(tempArr[randomIndex]);
//     tempArr.splice(randomIndex, 1);
//   }

//   return newArr;
// }

// console.log(shuffleArr(arr));
