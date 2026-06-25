// ===========================
//          console
// ===========================

// console.log("Muhammad Hussain");
// console.info("This is info message");
// console.warn("This is warning message");
// console.error("This is error message");
// console.table(["Hussain", "Suleman", "Zaryab"]);
// console.dir(document);

// ===========================
//          Variables
// ===========================

// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a, b, c);

// ===========================
//      Types of Cases
// ===========================

// camelCase
// PascalCase
// snake_case
// kabab-case

// ===========================
//    Primitive Datatypes
// ===========================

// 📝 NNSSBBU

// let number_dt = 1039;
// let null_dt = null;
// let string_dt = "Hussain";
// let symbol_dt = Symbol("This is symbol");
// let boolean_dt = true;
// let bigint_dt = 123456789123456789n;
// let undefined_dt;

// =============================
//    Non Primitive Datatypes
// =============================

// const array_dt = ["Hussain", 21, true];
// const object_dt = { name: "Hussain", age: 21, isStudent: true };
// const set_dt = new Set([1, 2, 3, 4, 5]);
// const map_dt = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// ===========================
//          typeof()
// ===========================

// let a = "Hussain";
// let b = 21;
// let c = false;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// ===========================
//       Type Coercion
// ===========================

// 💡 1. Implicit Type Coercion (Automatic)
// console.log("5" + 2);
// console.log(typeof ("5" + 2));
// console.log("5" - 2);
// console.log(typeof ("5" - 2));
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("Hi!"));

// 💡 2. Explicit Type Coercion (Manual)
// console.log(typeof Number("123"));
// console.log(typeof String(1039));
// console.log(typeof Boolean(1));

// ===========================
//     Not a Number (NaN)
// ===========================

console.log(0 / 0);
console.log(Number("Hussain"));
console.log("abc" - 2);

// 💡 Number.isNaN()
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN("Hussain"));
// ❌ Avoid Global isNaN(), it is wrong approach
console.log(isNaN("Hussain"));
