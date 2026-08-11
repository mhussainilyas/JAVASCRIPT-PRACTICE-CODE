// ========================
//      Question # 44
// ========================
// 💡 Guess the Output:
// let date = new Date(0);
// console.log(date.toString());

// === Answer ===
// Epoch Time
// Thu Jan 01 1970 05:00:00 GMT+0500 (Pakistan Standard Time)

// ========================
//      Question # 45
// ========================
// 💡 Validate that a user's selected date range is no longer than 30 days.

// let currDate = new Date();
// let userApplyDate = new Date("2026-07-27T00:00:00.000");

// let dateDiff = currDate.getTime() - userApplyDate.getTime();
// let numberOfDays = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

// if (numberOfDays > 30) {
//   console.log("Session is closed!!!");
// } else {
//   console.log("Apply right now!");
// }

// ========================
//      Question # 46
// ========================
// 💡 Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.

// let date1 = new Date("2005-04-27T00:00:00.000");
// let date2 = new Date("2009-08-04T00:00:00.000");

// let dateDiff;

// if (date1.getTime() > date2.getTime()) {
//   dateDiff = date1.getTime() - date2.getTime();
// } else {
//   dateDiff = date2.getTime() - date1.getTime();
// }

// dateDiff = dateDiff / 1000;

// let yearDiff = Math.floor(dateDiff / (60 * 60 * 24 * 365));
// dateDiff = dateDiff % (60 * 60 * 24 * 365);

// let monthDiff = Math.floor(dateDiff / (60 * 60 * 24 * 30));
// dateDiff = dateDiff % (60 * 60 * 24 * 30);

// let daysDiff = Math.floor(dateDiff / (60 * 60 * 24));
// dateDiff = dateDiff % (60 * 60 * 24);

// let hoursDiff = Math.floor(dateDiff / (60 * 60));
// dateDiff = dateDiff % (60 * 60);

// let minutesDiff = Math.floor(dateDiff / 60);
// let secondDiff = Math.floor(dateDiff % 60);

// console.log(
//   `${yearDiff} years ${monthDiff} months ${daysDiff} Days ${hoursDiff} Hours ${minutesDiff} Minutes ${secondDiff} Seconds`,
// );

// ****** 💡 Luxon Library ******

// let { DateTime } = require("luxon");

// let date1 = DateTime.fromISO("2005-04-27T00:00:00.000Z");
// let date2 = DateTime.fromISO("2009-08-04T00:00:00.000Z");

// let dateDiff = date2.diff(date1, [
//   "years",
//   "months",
//   "days",
//   "hours",
//   "minutes",
//   "seconds",
// ]);

// let { years, months, days, hours, minutes, seconds } = dateDiff.values;

// console.log(
//   `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`,
// );

// ========================
//      Question # 47
// ========================
// 💡 Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“)

// let numberOfDays = 10;
// let currentDate = new Date();

// let daysInMilliseconds = numberOfDays * 24 * 60 * 60 * 1000;

// let resultDate = currentDate.getTime() + daysInMilliseconds;

// let newDate = new Date(resultDate);
// console.log(newDate);

// ========================
//      Question # 48
// ========================
// 💡 Calculate the user's age from their date of birth.

// let currentDate = new Date();
// let userDateOfBirth = new Date("2005-04-27T00:00:00.000");

// let userAge = currentDate.getFullYear() - userDateOfBirth.getFullYear();

// let hasBirthdayPassed =
//   currentDate.getMonth() > userDateOfBirth.getMonth() ||
//   (currentDate.getMonth() === userDateOfBirth.getMonth() &&
//     currentDate.getDate() > userDateOfBirth.getDate());

// if (!hasBirthdayPassed) {
//   userAge--;
// }

// console.log(`You are ${userAge} years old.`);

// ========================
//      Question # 49
// ========================
// 💡 Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to centralize this logic in a utility?

// let dateStr = "2005-04-27T00:00:00.000Z";
let dateStr = "2009-08-04T00:00:00.000Z";

function formateDate(dateStr) {
  let date = new Date(dateStr);

  return date.toLocaleDateString("en-Pk", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

let formattedDate = formateDate(dateStr);
console.log(formattedDate);
