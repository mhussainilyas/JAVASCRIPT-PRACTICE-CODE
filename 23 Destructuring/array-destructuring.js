// =======================
// 🚀 Array Destructuring
// =======================

// const arr = [100, 200, 300];

// let [a, b, c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// ***** ✔ Destructuring with rest operator *****

// const arr = [1, 2, 3, "hussain", false];

// let [a, b, c, ...others] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(others);

// ***** ✔ Default Values *****

// const nums = [10, 20, 30];

// let [a, b, c, d = 0] = nums;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ***** ✔ Skip Values *****

// const nums = [1, 2, 3, 4, 5];

// let [a, b, , , e] = nums;

// console.log(a);
// console.log(b);
// console.log(e);

// ***** ✔ Swaping Values *****

// let a = 5;
// let b = 10;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// ***** ✔ Nested Destructuring *****

// const arr = [1, 2, 3, [4, 5], 6];

// let [a, b, c, [d1, d2], e] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d1);
// console.log(d2);
// console.log(e);
