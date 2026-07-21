const container = document.querySelector(".container");

// ===== 💡 Without Event Delegation =====
// Array.from(container.children).forEach((box) => {
//   box.addEventListener("click", function () {
//     console.log(box.innerText);
//   });
// });

// ===== 💡 With Event Delegation =====
container.addEventListener("click", function (e) {
  const currElem = e.target;
  if (currElem.classList.contains("box")) {
    console.log(currElem.innerText);
  }
});
