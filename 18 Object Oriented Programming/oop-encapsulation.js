// =================
// 🚀 Encapsulation
// =================
// It means wrapping data (properties) and methods (functions) together into a single unit, usually a class or an object, and restricting direct access to some of the components.

class Car {
  #fuel = 100;

  #burnFuel() {
    this.#fuel -= 1;
  }

  start() {
    this.#burnFuel();
    console.log("Car is starting...");
  }
}

let c1 = new Car();
console.log(c1);

c1.start();
console.log(c1);

// === ❌ it will not accessible ===
console.log(c1.fuel);
c1.burnFuel();
console.log(c1);
