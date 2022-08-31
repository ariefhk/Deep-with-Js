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
console.log(hasilPerkalian);
