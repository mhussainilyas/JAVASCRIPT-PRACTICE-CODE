// ===============
//       DOM
// ===============
// HTML ➡ DOM ➡ Javascript Object

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.dir(document);
// console.log(document.URL);
// console.log(document.nodeName);

// ===== 💡 NodeList =====
const list = document.querySelectorAll("h1"); // NodeList
const listArr = Array.from(list); // NodeList Convert into Array
console.log(listArr);
