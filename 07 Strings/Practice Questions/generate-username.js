let name = prompt("Enter your full name:");

let username = `@${name.trim().replaceAll(" ", "").toLowerCase()}_${name.length}`;

console.log(username);
