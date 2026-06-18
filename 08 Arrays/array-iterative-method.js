// ==========================
//       map() function
// ==========================

// let marks = [1, 2, 5, 9, 10];

// let newArr = marks.map((elem, index, arr) => {
//   console.log(elem, index, arr);
//   return elem * 2;
// });

// console.log(newArr);

// ==============================
//       foreEach() function
// ==============================

// let marks = [1, 2, 5, 9, 10];

// marks.forEach((elem, index, arr) => {
//   console.log(elem, index, arr);
//   marks[index] = elem * elem;
// });

// console.log(marks);

// =============================
//       filter() function
// =============================

// let marks = [1, 2, 5, 9, 10];

// let newArr = marks.filter((elem, index, arr) => {
//   console.log(elem, index, arr);
//   return elem % 2 === 0;
// });

// console.log(newArr);

// =============================
//       reduce() function
// =============================

let marks = [1, 2, 5, 9, 10];

let newArr = marks.reduce((acc, elem, index, arr) => {
  console.log(acc, elem, index, arr);
  return acc + elem;
}, 0);

console.log(newArr);
