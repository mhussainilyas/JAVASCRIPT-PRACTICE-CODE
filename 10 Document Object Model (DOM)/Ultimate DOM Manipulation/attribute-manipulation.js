let btn = document.querySelector(".btn");

// console.log(btn.attributes.class.value);

// ===== 💡 elem.getAttribute(attrName) =====
// let btnClassAttr = btn.getAttribute("class");
// console.log(btnClassAttr);

// ===== 💡 elem.setAttribute(attrName, attrValue) =====
// btn.setAttribute("id", "primary-btn");

let newBtnClass = "secondary-btn";
btn.setAttribute("class", `btn ${newBtnClass}`);
console.log(btn);