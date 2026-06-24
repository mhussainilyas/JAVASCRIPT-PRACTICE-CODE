// ================================
//   5 Phases of DOM Manipulation
// ================================

// 1) DOM
// 2) Selection of HTML elements.
// 3) How to change or manipulate HTML
// 4) How to change or manipulate CSS
// 5) Event listeners (event ko kaise suna jaye).

// ==============================================

const heading = document.querySelector(".main-heading");
const paragraph = document.querySelector(".description");
console.log(paragraph);

heading.innerHTML = "Muhammad Hussain";
paragraph.innerHTML = "Bachelor In Computer Science";

heading.style.borderRadius = "10px";
heading.style.backgroundColor = "orange";
heading.style.cursor = "pointer";
paragraph.style.borderRadius = "10px";
paragraph.style.backgroundColor = "black";

heading.addEventListener("click", () => {
  const prevContent = heading.innerHTML;
  heading.innerHTML = "You click the heading...";
  setTimeout(() => {
    heading.innerHTML = prevContent;
  }, 2000);
});

paragraph.addEventListener("copy", () => {
  alert("Don't try to steal my content 😤");
});
