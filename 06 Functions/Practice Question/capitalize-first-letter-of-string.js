function capitalize(str) {
  let strArr = str.split(" ");

  let capStrArr = strArr.map((letter) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  });

  return capStrArr.join(" ");
}

let myStr = "my name is muhammad hussain";
let capitalizeStr = capitalize(myStr);
console.log(capitalizeStr);
