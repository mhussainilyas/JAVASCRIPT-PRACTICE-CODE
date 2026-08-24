// ===============
// Default Export
// ===============

// function sum(a, b) {
//   return a + b;
// }

// export default sum;

// ========================

// let name = "Hussain";
// let age = 21;

// function sum(a, b) {
//   return a + b;
// }

// export default {
//   sum,
//   name,
//   age,
// };

// =============
// Named Export
// =============

// export function sum(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// =============================

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { sum, subtract };
