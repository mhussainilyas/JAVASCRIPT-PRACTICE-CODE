// ================
// ⚠ Callback Hell
// ================
// 💡 Pyramid Of Doom
// Callback Hell happens when you have many nested callbacks — one inside another — usually in asynchronous code.

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log(data);
//     if (callback) {
//       callback();
//     }
//   }, 3000);
// }

// console.log("fetching 1st data...");

// getData("1st data", () => {
//   console.log("fetching 2nd data...");
//   getData("2nd data", () => {
//     console.log("fetching 3rd data...");
//     getData("3rd data", () => {
//       console.log("fetching 4th data...");
//       getData("4th data", () => {
//         console.log("fetching 5th data...");
//         getData("5th data", () => {
//           console.log("fetching 6th data...");
//           getData("6th data");
//         });
//       });
//     });
//   });
// });
