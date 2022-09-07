const user = {
  name: "Arief Rachman Hakim",
  age: 20,
  country: "Indonesia",
};

const user1 = {
  name1: "Budi",
  age1: 22,
  country1: "Inggris",
};

const user2 = {
  age2: 20,
  country2: "Spain",
};

// conventional
var name = user.name;
var age = user.age;
var country = user.country;

// destructuring
var { name, age, country } = user;
var { name1: userName, age1, country1 } = user1;
var { name2: userName2 = "Guess", age2, country2 } = user2;

console.log("====================");
console.log("User 1");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);

console.log("====================");
console.log("User 2");
console.log(`Name: ${userName}`);
console.log(`Age: ${age1}`);
console.log(`Country: ${country1}`);

console.log("====================");
console.log("User 3");
console.log(`Name: ${userName2}`);
console.log(`Age: ${age2}`);
console.log(`Country: ${country2}`);
