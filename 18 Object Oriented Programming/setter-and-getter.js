// =====================
// 🚀 Setter and Getter
// =====================

// class BankAccount {
//   #balance = 0;

//   constructor(holderName, balance) {
//     this.holderName = holderName;
//     this.#balance = balance;
//   }

//   deposite(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//     }
//   }

//   // === 💡 setter function ===
//   setBalance(newBalance) {
//     if (isNaN(newBalance)) {
//       console.error("Invalid balance amount!");
//     } else {
//       this.#balance = newBalance;
//       console.log(`Balance is set to ${newBalance}`);
//     }
//   }

//   // === 💡 getter function ===
//   getBalance() {
//     return this.#balance;
//   }
// }

// let acc1 = new BankAccount("Hussain", 1000);
// acc1.setBalance(3000);
// console.log(acc1);

// ===================================
// 🚀 Setter and Getter (naya tarika)
// ===================================

class BankAccount {
  #balance = 0;

  constructor(holderName, balance) {
    this.holderName = holderName;
    this.#balance = balance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  // === 💡 setter function ===
  set Balance(newBalance) {
    if (isNaN(newBalance)) {
      console.error("Invalid balance amount!");
    } else {
      this.#balance = newBalance;
      console.log(`Balance is set to ${newBalance}`);
    }
  }

  // === 💡 getter function ===
  get Balance() {
    return this.#balance;
  }
}

let acc1 = new BankAccount("Hussain", 1000);
acc1.Balance = 2000;
console.log(acc1.Balance);
