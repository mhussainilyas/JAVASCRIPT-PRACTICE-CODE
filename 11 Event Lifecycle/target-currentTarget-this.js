const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

function handleGrandParent(e) {
  console.log("This is grand parent click");
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(this);
}

function handleParent(e) {
  console.log("This is parent click");
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(this);
}

function handleChild(e) {
  console.log("This is child click");
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(this);
}

grandParent.addEventListener("click", handleGrandParent);
parent.addEventListener("click", handleParent);
child.addEventListener("click", handleChild);