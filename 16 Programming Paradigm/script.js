// ============================
//    Imperative Programming
// ============================
// 💡 Tell the computer how to do something.

// let doubleNum = [];
// let nums = [1, 2, 3];

// for (let i = 0; i < nums.length; i++) {
//     doubleNum.push(nums[i] * 2);
// }

// console.log(doubleNum);

// =============================
//    Declarative Programming
// =============================
// 💡 Tell the computer what to do something, not how to do.

// let nums = [1, 2, 3];

// let doubleNum = nums.map((num) => {
//     return num * 2;
// })

// console.log(doubleNum);

// ============================
//    Procedural Programming
// ============================

// function zeroNum() {
//     console.log("Number is 0");
// }

// function positiveNum() {
//     console.log("Number is +ve");
// }

// function negativeNum() {
//     console.log("Number is -ve");
// }

// function endProgram() {
//     console.log("Program is ended...");
// }

// function checkNumber(num) {
//     if (num === 0) {
//         zeroNum();
//     } else if (num > 0) {
//         positiveNum();
//     } else {
//         negativeNum();
//     }

//     endProgram();
// }

// let num = 0;

// checkNumber(num);

// ============================
//    Structured Programming
// ============================

// let num = 0;

// if (num === 0) {
//     console.log("zero number");
// } else if (num > 0) {
//     console.log("+ve number");
// } else {
//     console.log("-ve number");
// }

// console.log("Program is ended");

// ============================
//    Functional Programming
// ============================

// 💡 Same output for the same input

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 4));

// 💡 Immutability

// function doubleNumber(numArr) {
//     return numArr.map((num) => {
//         return num * 2;
//     });
// }

// let arr = [1, 2, 3, 4, 5]
// console.log(doubleNumber(arr));
// console.log(arr);

// ==================================
//    Object Oriented Programming
// ==================================

// class Car {
//     year = 2026;

//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }

//     start() {
//         console.log("Car is start...");
//     }

//     stop() {
//         console.log("Car is stop...");
//     }
// }

// let hondaCity = new Car("Honda City", "Md58WID");
// let sonata = new Car("Sonata", "HAG354");

// hondaCity.start();
// hondaCity.stop();
// console.log(hondaCity);
// console.log(sonata);

// ===============================
//    Event Driven Programming
// ===============================

// const btn = document.querySelector(".btn");

// function handleClickFunc(e) {
//     console.log(e.target);
// }

// btn.addEventListener("click", handleClickFunc);

// ===============================
//    Asynchronous Programming
// ===============================

// setTimeout(() => {
//     console.log("This is line 1");
// }, 3000);

// setTimeout(() => {
//     console.log("This is line 2");
// }, 6000);

// setTimeout(() => {
//     console.log("This is line 3");
// }, 2000);

// setTimeout(() => {
//     console.log("This is line 4");
// }, 5000);
