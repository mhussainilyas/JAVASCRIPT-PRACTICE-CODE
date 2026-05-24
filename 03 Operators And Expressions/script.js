// =============================
//     Arithmetic Operators
// =============================

// 📝 +, -, *, /, %, **

// console.log(5 + 3);
// console.log(5 - 3);
// console.log(5 * 3);
// console.log(5 / 3);
// console.log(5 % 3);
// console.log(5 ** 3);

// =============================
//     Assignment Operators
// =============================

// 📝 =, +=, -=, *=, /=, %=, **=

// let a = 100;

// a += 50;      // a = 150
// a -= 50;      // a = 100
// a *= 2;       // a = 200
// a /= 4;       // a = 50
// a %= 3;       // a = 2
// a **= 4;      // a = 16

// console.log(a);

// =============================
//     Comparison Operators
// =============================

// 📝 ==, ===, !=, !==, <, <=, >, >=

// console.log(100 < 20);
// console.log(100 <= 100);
// console.log(100 > 20);
// console.log(100 >= 100);

// console.log(5 == 5);
// console.log(5 == "5");
// console.log(5 === 5);
// console.log(5 === "5");

// console.log(5 != 2);
// console.log(5 != 5);
// console.log(5 != "5");
// console.log(5 !== 2);
// console.log(5 !== 5);
// console.log(5 !== "5");

// =============================
//      Logical Operators
// =============================

// 📝 &&, ||, !

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// let x = 3;
// console.log(x >= 0 && x <= 100);

// let x = 150;
// console.log(x >= 0 || x <= 100);

// let x = 0;
// console.log(!(x != 0));

// ===================================
//    Increment/Decrement Operators
// ===================================

// 📝 ++, --

// let a = 5;
// console.log(a);

// console.log(a++);    // post-increment
// console.log(a);
// console.log(++a);    // pre-increment

// console.log(a--);    // post-decrement
// console.log(a);
// console.log(--a);    // pre-decrement

// 💡 Practice Question
// let num = 10;
// let result = num++ + ++num - 10;
// console.log(result);

// =============================
//      Ternary Operators
// =============================

// 💡 SYNTAX
// condition ? true : false;

// let age = 21;
// let result = age >= 18 ? "You can drive" : "You can't drive";
// console.log(result);

// 💡 Practice Question - find largest number
// let a = 5;
// let b = 2;
// let c = 12;
// let largestNum = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log(largestNum);

// =============================
//      Bitwise Operators
// =============================

// 📝 &, |, ~, ^, >>, <<

// console.log(5 & 3);
// console.log(4 & 7);

// console.log(8 | 11);
// console.log(26 | 15);

// console.log(~3);
// console.log(~0);
// console.log(~(-5));
// 💡 Shortcut For Not Operator: -(x + 1)

// console.log(15 ^ 11);
// 💡 swap two numbers using ^ operator
// let x = 10;
// let y = 20;
// console.log(`x = ${x}, y = ${y}`);
// x = x ^ y;
// y = x ^ y;
// x = x ^ y;
// console.log(`x = ${x}, y = ${y}`);

// console.log(5 << 1);
// console.log(5 << 2);
// console.log(5 << 3);

// console.log(20 >> 1);
// console.log(20 >> 2);
// console.log(20 >> 3);
