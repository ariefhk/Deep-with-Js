// Function tipe void
const tampilkanString = () => {
  console.log("Hallo Arief!");
};
tampilkanString();

// Function tipe return
const tampilkanAngka = () => {
  return 2;
};
let showAngkaDua = tampilkanAngka();
console.log(showAngkaDua);

// Function dengan Parameter
const penjumlahan = (angka1, angka2) => {
  return angka1 + angka2;
};
console.log(penjumlahan(5, 5));

// Function dengan parameter default
const pengurangan = (angka2, angka1 = 10) => {
  return angka1 - angka2;
};
console.log(pengurangan(5));
