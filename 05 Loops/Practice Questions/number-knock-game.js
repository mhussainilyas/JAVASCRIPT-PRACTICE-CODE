let computerNumber = 10;
let guessNumber = null;

while (guessNumber !== computerNumber) {
  guessNumber = Number(prompt("Guess the actual number 😉"));

  if (isNaN(guessNumber)) {
    alert("invalid number, please try again!");
  } else if (guessNumber < computerNumber / 2) {
    alert("too low 😅, please try again!");
  } else if (guessNumber < computerNumber) {
    alert("number is low, please try again!");
  } else if (guessNumber > computerNumber + computerNumber / 2) {
    alert("too high 😅, please try again!");
  } else if (guessNumber > computerNumber) {
    alert("number is high, please try again!");
  } else {
    alert("congratulations! your guess is correct 😊");
  }
}
