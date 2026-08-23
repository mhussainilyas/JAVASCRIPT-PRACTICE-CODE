// ========================
// 🚀 Object Destructuring
// ========================

// const user = {
//   name: "Hussain",
//   streetAddress: "street#07, House#25-A",
//   isMarried: false,
//   address: {
//     city: "Lahore",
//     pinCode: 54000,
//   },
// };

// let {
//   name,
//   streetAddress,
//   isMarried,
//   address: { city, pinCode },
// } = user;

// console.log(name);
// console.log(streetAddress);
// console.log(isMarried);
// console.log(city);
// console.log(pinCode);

// ***** ✔ Destructuring with rest operator *****

// let obj = {
//   name: "hussain",
//   age: 21,
//   isMarried: false,
//   passion: "Development",
// };

// let { name, age, ...others } = obj;

// console.log(name);
// console.log(age);
// console.log(others);

// ***** ✔ Default Values *****

// let obj = {
//   name: "hussain",
//   age: 21,
// };

// let { name, age = 18, passion = "Null" } = obj;

// console.log(age);
// console.log(passion);

// ***** ✔ Renaming variable *****

// let obj = {
//   name: "Muhammad Hussain",
//   age: 21,
// };

// let { name: fullName, age } = obj;

// console.log(fullName);
// console.log(age);

// ***** ✔ Nested Destructuring *****

// let obj = {
//   name: "Muhammad Hussain",
//   age: 21,
//   address: {
//     city: "Lahore",
//     pinCode: 54000,
//     arr: [1, 2, 3, 4, 5],
//   },
// };

// let {
//   name: fullName,
//   age,
//   address: {
//     city,
//     pinCode: pin,
//     arr: [a, b, c, d, e],
//   },
// } = obj;

// console.log(fullName);
// console.log(age);
// console.log(city);
// console.log(pin);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);