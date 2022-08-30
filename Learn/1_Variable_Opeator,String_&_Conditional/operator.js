// 1.Aritmatika
//   - Tambah (+)
//   - Kurang (–)
//   - Kali (*)
//   - Bagi (/)
//   - Modulus (%)
let angka1 = 10;
let angka2 = 5;
console.log("Operator Aritmatika");
console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`); //10 + 5 = 15
console.log(`${angka1} - ${angka2} = ${angka1 - angka2}`); //10 - 5 = 5
console.log(`${angka1} * ${angka2} = ${angka1 * angka2}`); //10 * 5 = 50
console.log(`${angka1} / ${angka2} = ${angka1 / angka2}`); //10 / 5 = 2
console.log(`${angka1} % ${angka2} = ${angka1 % angka2}\n`); //10 % 5 = 0

// 2.Assignment (=)
console.log("Operator Assignment");
let hobby = "ngoding";
console.log(`Hobby saya adalah ${hobby}\n`); //Hobby saya adalah ngoding

// 3.Perbandingan
//   - Equal Operator (==)
//   - Not Equal( != )
//   - Strict Equal( === )
//   - Strict not Equal( !== )
//   - Kurang dari & Lebih Dari ( <, >, <=, >=)
console.log("Operator Perbandingan");
let angka = 50;
console.log("equal");
console.log(angka == 50); //true
console.log(angka == 20, "\n"); //false

console.log("not equal");
let kesukaan = "kamu";
console.log(kesukaan != "dia"); //true
console.log(kesukaan != "kamu", "\n"); //true

console.log("strict equal");
let angkaNew = 25;
console.log(angkaNew == "25"); //true
console.log(angkaNew === "25"); //false
console.log(angkaNew === 25, "\n"); //true

console.log("strict not equal");
let number = 12;
console.log(number != "12"); //false
console.log(number !== "12"); //true
console.log(number !== 12, "\n"); //false

console.log("// Kurang dari & Lebih Dari ( <, >, <=, >=)");
let numberNew = 17;
console.log(numberNew < 20); // true
console.log(numberNew > 17); // false
console.log(numberNew >= 17); // true, karena terdapat sama dengan
console.log(numberNew <= 20, "\n"); // true

// 4.Kondisional
//   - OR (||)
//   - AND (&&)
console.log("OR (||)");
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false, "\n"); // false

console.log("AND (&&)");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true
