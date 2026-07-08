const h3 = document.querySelector(".css-manipulation-heading");

// ===== 💡 1st method =====
// h3.setAttribute("style", "background:pink; color:red;");
// h3.setAttribute("class", `${h3.getAttribute("class")} bg-red`);

// ===== 💡 2nd method =====
// h3.style.backgroundColor = "pink";
// h3.style["border-radius"] = "5px";
// h3.style.padding = "10px";
// h3.style.color = "red";

// ===== 💡 3rd method =====
// h3.style.cssText = "color: white; background-color: black; padding: 10px;";

// ===== 💡 4th method =====
// h3.className = `${h3.getAttribute("class")} bg-red`;
// console.log(h3.className);

// ===== 💡 5th method =====
h3.classList.add("bg-red");
h3.classList.remove("bg-red");
h3.classList.toggle("bg-red");
let res = h3.classList.contains("bg-red");

console.log(res);
console.log(h3.className);