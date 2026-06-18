let arr = [2, 5, "MHI", 6, 5, 8];

// ===== 💡 push(elem) =====
// let a = arr.push("Ali");
// console.log(a); // return new length of array
// console.log(arr);

// ===== 💡 pop() =====
// let b = arr.pop();
// console.log(b); // return removed item
// console.log(arr);

// ===== 💡 unshift(elem) =====
// let c = arr.unshift("Hamid");
// console.log(c); // new length of array
// console.log(arr);

// ===== 💡 shift() =====
// let d = arr.shift();
// console.log(d); // return removed item
// console.log(arr);

// ===== 💡 slice(start, end) =====
// let newArr = arr.slice(1, 3);
// let newArr2 = arr.slice(-4, 3);
// console.log(newArr2);

// ===== 💡 splice(start, delete, elem1, elem2,...) =====
// let x = arr.splice(2, 0, "Hussain", 21);
// let x1 = arr.splice(2, 1, "Hussain", 21);
// let x2 = arr.splice(2, 2, "Hussain", 21);
// let x3 = arr.splice(2, 2);
// console.log(arr);
// console.log(x3);

// ===== 💡 concat(arr1, arr2,...) =====
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let newArr = arr.concat(arr1, arr2);
// console.log(newArr);

// ===== 💡 join(something) =====
// let str = arr.join("");
// let str1 = arr.join(" ");
// let str2 = arr.join("-");
// let str3 = arr.join(" AND ");
// console.log(str3);

// ===== 💡 toString() =====
// let str = arr.toString();
// console.log(str);

// ===== 💡 includes() =====
// let res = arr.includes("MHI");
// let res1 = arr.includes("mhi");
// console.log(res1);

// ===== 💡 indexOf(elem) =====
// let index = arr.indexOf("MHI");
// console.log(index);

// ===== 💡 lastIndexOf(elem) =====
// let index = arr.lastIndexOf(5);
// console.log(index);

// ===== 💡 reverse() =====
// let res = arr.reverse();
// console.log(arr);
// console.log(res);

// ===== 💡 find(func) =====
// let result = arr.find((item) => {
//   return item === "MHI";
// });
// console.log(result);

// ===== 💡 flat(level) =====
// let marks = [1, 2, [3, [4, 5, 6], 7, 8], 9];
// console.log(marks);
// let newArr = marks.flat();
// let newArr1 = marks.flat(1);
// let newArr2 = marks.flat(2);
// let newArr3 = marks.flat(Infinity);
// console.log(newArr3);