// ======================
//     Question # 31
// ======================
// 💡 How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

// const nameField = document.querySelector(".name-field");
// const emailField = document.querySelector(".email-field");
// const nameData = document.querySelector(".name-data");
// const emailData = document.querySelector(".email-data");

// nameField.addEventListener("input", (e) => {
//   nameData.innerText = e.target.value;
// });

// emailField.addEventListener("input", (e) => {
//   emailData.innerText = e.target.value;
// });

// ======================
//     Question # 32
// ======================
// 💡 How would you handle form validation in real time and show error messages dynamically?

// const nameField = document.querySelector(".name-field");
// const passwordField = document.querySelector(".pwd-field");
// const emailField = document.querySelector(".email-field");
// const nameError = document.querySelector(".name-error");
// const passwordError = document.querySelector(".pwd-error");
// const emailError = document.querySelector(".email-error");

// nameField.addEventListener("input", (e) => {
//   let name = e.target.value;
//   if (name.length < 3) {
//     nameError.innerText = "name must contains at least 3 characters";
//   } else {
//     nameError.innerText = "";
//   }
// });

// nameField.addEventListener("blur", () => {
//   nameError.innerText = "";
// });

// emailField.addEventListener("input", (e) => {
//   let email = e.target.value;
//   if (!email.includes("@") || !email.includes(".")) {
//     emailError.innerText = "your email is invalid!";
//   } else {
//     emailError.innerText = "";
//   }
// });

// emailField.addEventListener("blur", () => {
//   emailError.innerText = "";
// });

// passwordField.addEventListener("input", (e) => {
//   let password = e.target.value;
//   if (password.length < 8) {
//     passwordError.innerText = "Password is to weak!!!";
//   } else {
//     passwordError.innerText = "";
//   }
// });

// passwordField.addEventListener("blur", () => {
//   passwordError.innerText = "";
// });

// ======================
//     Question # 33
// ======================
// 💡 How do you find the closest ancestor element that matches a selector?

// const child = document.querySelector(".child");
// let ancestor = child.closest(".parent");
// console.log(ancestor);

// ======================
//     Question # 34
// ======================
// 💡 How would you toggle a class on an element when another element is clicked (e.g., show/hide sidebar)?

// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("show-links");
// });

// ======================
//     Question # 35
// ======================

// const passwordEyeBtn = document.querySelector(".password i");
// const passwordField = document.querySelector(".password-field");

// passwordEyeBtn.addEventListener("click", () => {
//   if (passwordField.type === "password") {
//     passwordField.type = "text";
//     passwordEyeBtn.classList.add("fa-eye");
//     passwordEyeBtn.classList.remove("fa-eye-slash");
//   } else {
//     passwordField.type = "password";
//     passwordEyeBtn.classList.remove("fa-eye");
//     passwordEyeBtn.classList.add("fa-eye-slash");
//   }
// });

// ======================
//     Question # 36
// ======================
// 💡 Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling down. (Key concepts: scroll event, window.scrollY, classList.add/remove)

// const header = document.querySelector(".header");

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY > 280) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });
