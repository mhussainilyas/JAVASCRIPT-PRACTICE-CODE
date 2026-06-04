function createUsername(fname) {
  return `@${fname.replaceAll(" ", "")}${fname.length}`;
}

let result = createUsername("Muhammad Hussain Ilyas");
console.log(result);
