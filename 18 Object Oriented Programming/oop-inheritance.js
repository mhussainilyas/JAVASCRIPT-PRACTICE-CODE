// ===============
// 🚀 Inheritance
// ===============
// Inheritance is an OOP concept where one class (child) can acquire properties and methods of another class (parent).

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }

  stop() {
    console.log(`${this.brand} is stoping...`);
  }
}

class ElectricCar extends Car {
  constructor(brand, color, battery) {
    super(brand, color);
    this.battery = battery;
  }

  charge() {
    console.log(`${this.brand} is charging...`);
  }
}

let eleCar = new ElectricCar("BMW", "Black", "5000MAH");
console.log(eleCar);
eleCar.start();
eleCar.stop();
eleCar.charge();
