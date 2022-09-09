const user = [
  { name: "Arief", age: 20 },
  { name: "Budi", age: 22 },
];

// Looping through array
for (const { name, age } of user) {
  console.log(name);
}

const [, { name }] = user;

console.log(name);

const num = 12;

let lebihBesar5persen = 12 * 0.2;
console.log(lebihBesar5persen);
