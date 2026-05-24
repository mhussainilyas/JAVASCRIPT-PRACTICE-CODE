// ===================
//   💡 Falsy Values
// ===================

// false
// undefined
// null
// 0, -0
// 0n (Bigint)
// ""
// NaN

// ====================
//   💡 Truthy Values
// ====================

// Anything which is not falsy is calles truthy.

// ====================
//     Example Code
// ====================

let username = "Hussain";
let password = 1234;
let result = username && password ? "Successfull" : "Failed";
console.log(result);

let isStudent = false;
if (!isStudent) {
  console.log("No! He is not a student");
}
