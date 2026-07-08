// ===========================
//     tagName / nodeName
// ===========================

// const h2 = document.querySelector(".heading-2");
// console.log(h2.tagName);
// console.log(h2.nodeName);
// console.log(h2.firstChild.tagName);
// console.log(h2.firstChild.nodeName);

// ================================
//     innerText / textContent
// ================================

// const p = document.querySelector(".paragraph-lorem");
// console.log(p.innerText);
// console.log(p.textContent);
// p.innerText = "This is some text using innerText"
// p.textContent = "This is some text using textContent";

// ==================
//     innerHTML
// ==================

// const p = document.querySelector(".paragraph-lorem");
// console.log(p.innerHTML);
// p.innerHTML = "I'm <b>Muhammad</b> Hussain.";

// ==========================
//     Element Insertion
// ==========================

// let div = document.querySelector(".parent-div");

// let p = document.createElement("p");
// p.innerText = "Muhammad Hussain Ilyas";

// ===== 💡 elem.append(elem) =====
// div.append(p);

// ===== 💡 elem.prepend(elem) =====
// div.prepend(p);

// ===== 💡 elem.before(elem) =====
// div.before(p);

// ===== 💡 elem.after(elem) =====
// div.after(p);

// ===== 💡 elem.appendChild(elem) =====
// div.appendChild(p);

// ===== 💡 elem.insertAdjacentElement(position, elem) =====
// div.insertAdjacentElement("beforebegin", p);
// div.insertAdjacentElement("afterbegin", p);
// div.insertAdjacentElement("afterend", p);
// div.insertAdjacentElement("beforeend", p);

// ===== 💡 parent.appendChild() =====
// let divChild = div.children[1];
// div.insertBefore(p, divChild);

// ==========================
//     Element Deletion
// ==========================

// let div = document.querySelector(".parent-div");

// ===== 💡 elem.remove() =====
// div.remove();

// ===== 💡 elem.removeChild(child) =====
// let delElement = div.children[0];
// div.removeChild(delElement);

// ==========================
//     Element Updation
// ==========================

// let div = document.querySelector(".parent-div");

// let h1 = document.createElement("h1");
// h1.innerText = "This is h1 heading.";

// ===== 💡 oldElem.replaceWith(newElem) =====
// div.replaceWith(h1);

// ===== 💡 parentElem.replaceChild(newChild, oldChild) =====
// let oldChild = div.children[1];
// div.replaceChild(h1, oldChild);
