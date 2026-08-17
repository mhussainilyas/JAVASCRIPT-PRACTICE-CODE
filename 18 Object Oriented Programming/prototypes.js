// === 💡 In JavaScript, Object and Array are functions (constructors), while their instances are objects. ===

// let arr = new Array(1, 2, 3, 4, 5);
// let obj = { name: "Hussain", age: 21 };
// console.log(typeof Object); // function
// console.log(typeof obj); // object
// console.log(typeof Array); // function
// console.log(typeof arr); // object

// =========================================================
// 🎯 Har object ke liye method ki SEPARATE COPY banti hai.
// =========================================================

// function User(name, age, passion) {
//   this.name = name;
//   this.age = age;
//   this.passion = passion;
//   this.intro = function () {
//     console.log(`Hye I'm ${this.name}`);
//   };
// }

// let u1 = new User("Hussain", 21, "Developer");
// let u2 = new User("Suleman", 22, "Designer");
// console.log(u1);
// console.log(u2);

// ==============================================================
// 💡 Method ek jagah hota hai aur objects usko SHARE karte hain.
// ==============================================================

// function User(name, age, passion) {
//   this.name = name;
//   this.age = age;
//   this.passion = passion;
// }

// User.prototype.intro = function () {
//   console.log(`Hye I'm ${this.name}`);
// };

// let u1 = new User("Hussain", 21, "Developer");
// let u2 = new User("Suleman", 22, "Designer");
// console.log(u1);
// console.log(u2);

// =====================
// 🎯 Real life example
// =====================

// function BankAccount(holderName, balance = 0) {
//   this.holderName = holderName;
//   this.balance = balance;

//   // === 🎯 1st priority ===
//   this.deposit = function (amount) {
//     console.log(amount);
//   };
// }

// === 🎯 2nd priority ===
// BankAccount.prototype.deposit = function (amount) {
//   if (amount > 0) {
//     this.balance += amount;
//   }
// };

// BankAccount.prototype.withdraw = function (amount) {
//   if (amount > 0 && amount <= this.balance) {
//     this.balance -= amount;
//   }
// };

// let hussainAcc = new BankAccount("Hussain", 150);
// let sulemanAcc = new BankAccount("Suleman", 550);
// let harisAcc = new BankAccount("Haris", 890);

// hussainAcc.deposit(25000);
// sulemanAcc.deposit(15000);
// harisAcc.deposit(12000);

// console.log(hussainAcc);
// console.log(sulemanAcc);
// console.log(harisAcc);

// hussainAcc.withdraw(1000);
// sulemanAcc.withdraw(1000);
// harisAcc.withdraw(1000);

// console.log(hussainAcc);
// console.log(sulemanAcc);
// console.log(harisAcc);

// ================
// 🎯 Class Syntax
// ================
// automatically add methods in prototype

// class BankAccount {
//   constructor(holderName, balance) {
//     this.holderName = holderName;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//     }
//   }
// }

// let acc1 = new BankAccount("Hussain", 1000);
// console.log(acc1);

// acc1.deposit(2000);
// console.log(acc1);

// acc1.withdraw(500);
// console.log(acc1);
