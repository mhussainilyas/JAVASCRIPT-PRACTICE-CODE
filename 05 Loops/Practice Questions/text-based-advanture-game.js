let playAgain = "yes";

while (playAgain === "yes") {
  alert("You wake up in the dark forest!");
  let userChoice = prompt("Do you want to go left or right?");

  if (userChoice === "left") {
    alert("You see something shiny in the mud!");
    userChoice = prompt("Do you want to pick it up (yes or no)?");
    if (userChoice === "yes") {
      alert("It's a magical stone, you are teleported to safety, you win! 🏆");
    } else if (userChoice === "no") {
      alert("You sink slowly into the mud, game over!");
    } else {
      alert("Invalid choice!");
    }
  } else if (userChoice === "right") {
    alert("You find a cave!");
    userChoice = prompt("Do you want to enter the cave (yes or no)?");
    if (userChoice === "yes") {
      alert("A dragon wakes up and chases you away, you barely escape!");
    } else if (userChoice === "no") {
      alert("You set up camp, A peaceful night under the stars, you win 🏆");
    } else {
      alert("Invalid choice!");
    }
  } else {
    alert("Invalid choice!");
  }

  userChoice = prompt("Do you want to play again (yes or no)?");
  if (userChoice === "no") {
    playAgain = "no";
    alert("Thanks for playing! 😊");
  }
}
