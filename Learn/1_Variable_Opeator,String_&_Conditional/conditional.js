// If/else
let toko = "open";
if (toko == "open") {
  console.log("Saya akan membeli telur dan buah");
} else {
  console.log("Toko tutup");
}

console.log("\n");
// If/else if/ else
let tokoBaru = "close";
let timeToOpen = 5;

if (tokoBaru == "close" || timeToOpen < 5) {
  console.log("Mau buka nih gua tungguin ahh");
} else if (tokoBaru == "close") {
  console.log("Toko tutup gua balik");
} else {
  console.log("Toko Buka gua mau beli endog");
}

console.log("\n");
// Switch Case
let buttonPushed = 1;
switch (buttonPushed) {
  case 1: {
    console.log("matikan TV!");
    break;
  }
  case 2: {
    console.log("turunkan volume TV!");
    break;
  }
  case 3: {
    console.log("tingkatkan volume TV!");
    break;
  }
  case 4: {
    console.log("matikan suara TV!");
    break;
  }
  default: {
    console.log("Tidak terjadi apa-apa");
  }
}

console.log("\n");
// Ternary Operator
// variablename = (condition) ? value1 : value2
let age = 20;

let voteable = age < 18 ? "Too young" : "Old enough";

console.log(voteable);
