// Imperative foreach v/s Declarative foreach
// Imperative map v/s Declarative map
// Implerative filter v/s Declarative filter
// Imperative reduce v/s Declarative reduce
// Imperative every v/s Declarative every
// Imperative find v/s Declarative find
// Sort

const numbers = [1, 2, 3, 4, 5];

// === 🎯 Point to be noted ===
// Inside the prototype method, this refers to the array on which the method was called.

// =========================
//    Imperative foreach
// =========================

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// numbers.myForEach(function (value, index, arr) {
//   console.log(value, index, arr);
// });

// =========================
//      Imperative map
// =========================

// Array.prototype.myMap = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };

// const doubled = numbers.myMap(function (num) {
//   return num * 2;
// });

// console.log(doubled);

// =========================
//     Imperative filter
// =========================

// Array.prototype.myFilter = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// const evenNumbers = numbers.myFilter((num) => num % 2 === 0);

// console.log(evenNumbers);

// =========================
//     Imperative reduce
// =========================

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };

// const sum = numbers.myReduce((acc, current) => acc + current, 0);

// console.log(sum);

// =========================
//     Imperative every
// =========================

// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }

//   return true;
// };

// const result = numbers.myEvery((num) => num % 2 === 0);
// const result = [2, 4, 6, 8].myEvery((num) => num % 2 === 0);

// console.log(result);

// =========================
//      Imperative find
// =========================

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

const result = numbers.myFind((num) => num % 2 === 0);

console.log(result);
