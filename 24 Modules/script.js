// ================================
// ***** 🎯 Common JS Method *****
// ================================

// *** import single item ***

// const nm = require("./math.js");
// console.log(nm);

// *** import multiple items ***

// const { name, age, sum } = require("./math.js");

// console.log(name);
// console.log(age);

// console.log(sum(10, 20));

// ===========================
// ***** 🎯 ES6 Modules *****
// ===========================

// *** Default Import ***

// import sumFunc from "./app.js";

// console.log(sumFunc(10, 50));

// ============================

// import obj from "./app.js";

// let { sum, name, age } = obj;

// console.log(sum(1, 2));
// console.log(name);
// console.log(age);

// *** Named Import ***

import { sum as sumFunc, subtract as subtractFunc } from "./app.js";

console.log(sumFunc(1, 4));
console.log(subtractFunc(10, 8));
