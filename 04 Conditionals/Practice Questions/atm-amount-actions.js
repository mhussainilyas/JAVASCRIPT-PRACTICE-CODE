let totalBalance = 100_000;

let choice = Number(
  prompt(
    "Enter your choice:\n1. check balance\n2. deposit amount\n3. withdraw amount\n4. exit",
  ),
);

if (choice === 1) {
  console.log(`Your balance is ${totalBalance}`);
} else if (choice === 2) {
  let depositAmount = Number(prompt("Enter amount to deposit 💰"));
  if (depositAmount > 0) {
    totalBalance += depositAmount;
    console.log(`You deposit ${depositAmount} in your balance`);
    console.log(`Your current balance is ${totalBalance}`);
  } else {
    console.log("Invalid amount");
  }
} else if (choice === 3) {
  let withdrawAmount = Number(prompt("Enter amount to withdraw 💰"));
  if (withdrawAmount > 0 && withdrawAmount <= totalBalance) {
    totalBalance -= withdrawAmount;
    console.log(`You withdraw ${withdrawAmount} in your balance`);
    console.log(`Your current balance is ${totalBalance}`);
  } else {
    console.log("Invalid amount");
  }
} else {
  console.log("Thanks for coming 😊");
}
