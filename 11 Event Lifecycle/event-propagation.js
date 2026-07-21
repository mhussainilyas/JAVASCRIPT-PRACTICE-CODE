const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

function handleGrandParent() {
  console.log("This is grand parent click");
}

function handleParent() {
  console.log("This is parent click");
}

function handleChild() {
  console.log("This is child click");
}

// ===== 💡 Bubbling Phase (Default) =====
// grandParent.addEventListener("click", handleGrandParent);
// parent.addEventListener("click", handleParent);
// child.addEventListener("click", handleChild);

// ===== 💡 Capturing(Trickling) Phase =====
// grandParent.addEventListener("click", handleGrandParent, true);
// parent.addEventListener("click", handleParent, true);
// child.addEventListener("click", handleChild, true);

// ===== 💡 Bidirection Flow (Capturing + Bubbling) =====
// grandParent.addEventListener("click", handleGrandParent, false);
// parent.addEventListener("click", handleParent, false);
// child.addEventListener("click", handleChild, false);
// grandParent.addEventListener("click", handleGrandParent, true);
// parent.addEventListener("click", handleParent, true);
// child.addEventListener("click", handleChild, true);

