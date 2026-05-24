// ============================
//     Logical || Operators
// ============================

// let result1 = "" || undefined || "Hussain" || null || 0n;
// let result2 = "" || undefined || false || null || 0n;
// console.log(result2);

// ============================
//     Logical && Operators
// ============================

// let result1 = "Hussain" && 21 && null && true && 123456789n;
// let result2 = "Hussain" && 21 && "Ilyas" && true && 123456789n;
// console.log(result2);

// let isAuthenticated = true;
// let user = "Muhammad Hussain Ilyas;";
// let result3 = isAuthenticated && user;
// console.log(result3);

// ====================================
//    Nullish Coalescing ?? Operator
// ====================================
// return the right hand value only if the left hand value is NULL or UNDEFINED

// let result1 = 0 ?? "Muhammad Hussain";
// let result2 = "" ?? "Muhammad Hussain";
// let result3 = false ?? "Muhammad Hussain";
// let result4 = null ?? "Muhammad Hussain";
let result5 = undefined ?? "Muhammad Hussain";
console.log(result5);
