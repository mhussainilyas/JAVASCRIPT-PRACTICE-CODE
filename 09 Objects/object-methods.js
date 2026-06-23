// let obj = {
//   name: "alpha",
//   age: 21,
// };

// ===== 💡 Object.keys(obj) =====
// let keysArr = Object.keys(obj);

// ===== 💡 Object.values(obj) =====
// let valuesArr = Object.values(obj);

// ===== 💡 Object.entries(obj) =====
// let entriesArr = Object.entries(obj);

// ===== 💡 Object.assign(target, source) =====
// const obj2 = {};
// let newObject = Object.assign(obj2, obj);
// console.log(newObject);
// console.log(obj2);

// ===== 💡 Object.freeze(obj) =====
// Object.freeze(obj);
// obj.city = "lahore"; // ❌ adding new property
// delete obj.age; // ❌ delete existing property
// obj.age = 22; // ❌ update existing property

// ===== 💡 Object.seal(obj) =====
// Object.seal(obj);
// obj.city = "lahore"; // ❌ adding new property
// delete obj.age; // ❌ delete existing property
// obj.age = 22; // ✔ update existing property

// ===== 💡 objName.hasOwnProperty(key) =====
// console.log(obj.hasOwnProperty("age"));
// console.log(obj.hasOwnProperty("city"));
