const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener(
  "click",
  function () {
    console.log("This is grand parent click");
  },
  { capture: false },
);

parent.addEventListener(
  "click",
  function (e) {
    console.log("This is parent click");
    // === 💡 stopPropagation() ===
    // e.stopPropagation();

    // === 💡 stopImmediatePropagation()  ===
    e.stopImmediatePropagation();
  },
  { capture: false },
);

parent.addEventListener(
  "click",
  function () {
    console.log("This is parent another click");
  },
  { capture: false },
);

child.addEventListener(
  "click",
  function () {
    console.log("This is child click");
  },
  { capture: false },
);
