let db_password = "admin123";
let user_password = "";
let no_of_attempt = 0;

// ***** Version 01 *****

// while (user_password !== db_password && no_of_attempt < 3) {
//   user_password = prompt("Enter correct password");
//   no_of_attempt++;

//   if (user_password === db_password) {
//     alert("congratulations! your password is correct 😊");
//   } else if (no_of_attempt >= 3) {
//     alert("your attemp is over, wait for 10s");
//   } else {
//     alert("incorrect password, please try again!");
//   }
// }

// ***** Version 02 *****

while (no_of_attempt < 3) {
  user_password = prompt("Enter correct password");
  no_of_attempt++;

  if (user_password === db_password) {
    alert("Login successful 😊");
    break;
  }

  if (no_of_attempt < 3) {
    alert("Wrong password, try again!");
  }
}

if (user_password !== db_password) {
  alert("Account locked. Too many failed attempts.");
}
