// ===============
// 🚀 Abstraction
// ===============
// Abstraction means hiding complex implementation details and showing only the essential features to the user.

class Car {
  fuel = 100;

  burnFuel() {
    this.fuel -= 1;
  }

  start() {
    this.burnFuel();
    console.log("Car is starting...");
  }
}

let c1 = new Car();
console.log(c1);

c1.start();
console.log(c1);

// === ✔ it is accessible ===
console.log(c1.fuel);
c1.burnFuel();
console.log(c1);
