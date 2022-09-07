class Car {
  constructor(brand, factory) {
    this.brand = brand;
    this.factory = factory;
    this.sound = "brummm";
  }

  present = () => {
    return `I have a ${this.brand} car`;
  };
}

class Model extends Car {
  constructor(brand, factory, model) {
    super(brand, factory);
    this.model = model;
  }
  show = () => {
    return `${this.present()} it's a ${this.model}`;
  };
}

let mycar = new Car("Ferari");
console.log(mycar.present());

let myNewcar = new Model("Ford", "Espain", "Mustang");
console.log(myNewcar.show());
