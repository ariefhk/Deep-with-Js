var personArr = ["Arief Rachman", "Hakim", "male", 20];

var personObj = {
  firstName: "Arief Rachman",
  lastName: "Hakim",
  gender: "male",
  age: 20,
};

// Cara Akses array
console.log(`Cara akses Array ${personArr}`);
console.log(`Cara akses Objek ${personObj}`);

var motorCycle = {
  brand: "Honda",
  type: "Naked",
  price: 10000,
};

// Cara akses objek seperti diatas
let brandMotor = motorCycle["brand"];
console.log(`Saya membeli motor dengan brand ${brandMotor}`);
