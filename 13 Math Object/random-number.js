// ===================
//    Random Number
// ===================

// === 💡 Math.random() ===
// generate random number b/w 0(included) and 1(excluded)
// console.log(Math.random());

// === 💡 generate random number b/w 0 and 10 ===
// console.log(Math.random() * 10);

// === 💡 generate random number b/w 1 and 10 ===
// console.log(Math.random() * 10 + 1);

// === 💡 generate random number b/w min and max (inclusive) ===
// console.log(Math.random() * (25 - 5 + 1) + 5);

// === 💡 function to generate random number ===
function getRandomNumber(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

for (let i = 0; i < 10; i++) {
  console.log(getRandomNumber(50, 100));
}
