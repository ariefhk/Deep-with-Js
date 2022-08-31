// Fitur ES6 :
//  1. Let + Const
//  2. Arrow Functions
//  3. Default Parameters
//  4. Destructuring
//  5. Rest Parameters + Spread Operator
//  6. Enhanced object literals
//  7. Template literals
//  8. Promises

console.log("1. Let + Const");
let nama = "Arief Rachman Hakim";
const isMale = true;
console.log(nama);
console.log(isMale, "\n");

console.log("2. Arrow Functions");
const cetakNama = () => {
  console.log("Hi, Nama saya Arief Rachman Hakim");
};
cetakNama();
console.log("\n");

console.log("3. Default Parameters");
const perkalian = (a, b = 1) => {
  return a * b;
};
const hasilPerkalian = perkalian(5);
console.log(hasilPerkalian, "\n");

console.log("4. Destructuring");
console.log("Normal Javscript");
let studentName = {
  firstName: "Peter",
  lastName: "Parker",
};
const firstName = studentName.firstName;
const lastName = studentName.lastName;
console.log(`Print fistName: ${firstName}`);
console.log(`Print lastName: ${lastName}\n`);

console.log("ES6");
let animalName = {
  firstNameAnimal: "Alex",
  lastNameAnimal: "Brodi",
};

const { firstNameAnimal, lastNameAnimal } = animalName;
console.log(`with es6: ${firstNameAnimal}`);
console.log(`with es6: ${lastNameAnimal}\n`);

console.log("5. Rest Parameters + Spread Operator");
console.log("Rest Parameter");
let scores = ["98", "95", "93", "90", "87", "85"];
let [first, second, third, ...restOfScores] = scores;

console.log(first);
console.log(second);
console.log(restOfScores, "\n");
console.log("Spread Operator");
let array1 = ["one", "two"];
let array2 = ["three", "four"];
let array3 = ["five", "six"];
// ES5 Way
var combinedArray = array1.concat(array2).concat(array3);
console.log(`es5 style: ${combinedArray}`);
// ES6 Style
var combinedArray = [...array1, ...array2, ...array3];
console.log(`es6 style: ${combinedArray}\n`);

console.log("6. Enhanced object literals");
// ES5
const myName = "Arief Rachman Hakim";
const arief = {
  myName: myName,
};
// ES6
const myNameNew = "Arief Rachman Hakim";
const ariefNew = {
  myNameNew,
};
console.log("\n");

console.log("7. Template literals");
const myCarBrand = "Ferari";
const myCarType = "Sport";
const amountOfTire = 4;

console.log(`My ${myCarBrand} with type ${myCarType} has ${amountOfTire} tire`);
