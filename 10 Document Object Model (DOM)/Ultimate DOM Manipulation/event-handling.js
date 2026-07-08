const btn = document.querySelector(".click-btn");

// ===== 💡 property based event handling =====

// btn.onclick = () => {
//   console.log("property wala 1st click");
// };

// btn.ondblclick = () => {
//   console.log("property wala double click");
// };

// 👉 NOTE: This will overwrite the previos event
// btn.onclick = () => {
//   console.log("property wala 2nd click");
// };

// ===== 💡 event listener method =====

// function firstClick() {
//   console.log("This is first click");
// }

// function secondClick() {
//   console.log("This is second click");
// }

// 👉 NOTE: This will not overwrite the previos event
// btn.addEventListener("click", firstClick);
// btn.addEventListener("click", secondClick);

// ===== 💡 remove event listener =====

// btn.removeEventListener("click", firstClick);
// btn.removeEventListener("click", secondClick);

// ===== 💡 event object =====

function hanldeBtnClick(e) {
  console.log(e);
  console.log(e.target);
}

btn.addEventListener("click", hanldeBtnClick);
