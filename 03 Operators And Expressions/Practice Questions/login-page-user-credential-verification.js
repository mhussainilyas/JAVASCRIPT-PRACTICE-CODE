let username = "";
let password = "";

let db_username = "hussain";
let db_password = "1234";

let message =
  username && password
    ? username === db_username && password === db_password
      ? "Login successfully"
      : "Invalid username or password"
    : "Please enter username or password";

console.log(message);
