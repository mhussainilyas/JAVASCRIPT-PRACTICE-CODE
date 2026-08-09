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
