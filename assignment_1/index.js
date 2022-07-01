function Car(brand, speed) {
  this.brand = brand;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Current speed of ${this.brand}: ${this.speed} (km/h)`);
};

Car.prototype.decelerate = function () {
  this.speed -= 5;
  console.log(`Current speed of ${this.brand}: ${this.speed} (km/h)`);
};

const bmw = new Car('BMW', 100);
const audi = new Car('Audi', 120);

bmw.accelerate();
bmw.decelerate();
bmw.decelerate();
