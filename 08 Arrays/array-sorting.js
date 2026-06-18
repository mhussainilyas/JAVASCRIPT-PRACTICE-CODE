// =============================
//      Sorting String Data
// =============================

// let heros = ["spiderman", "ironman", "hulk", "thor", "hawkeye", "wanda"];

// ===== 💡 Ascending order =====
// let result = heros.sort();

// ===== 💡 Descending order =====
// let result = heros.sort().reverse();

// console.log(result);

// =============================
//      Sorting Number Data
// =============================

let arr = [10, 5, 1, 20];

// ===== 💡 Ascending order =====
// let result = arr.sort((a, b) => {
//   console.log(`a = ${a}, b = ${b}`);
//   return a - b;
// });

// ===== 💡 Descending order =====
let result = arr.sort((a, b) => {
  console.log(`a = ${a}, b = ${b}`);
  return b - a;
});

console.log(result);
