const user = {
  name: "Arief Rachman Hakim",
  age: 20,
  country: "Indonesia",
  links: {
    ig: "instagram.com/ariefrh.dev/",
    github: "github.com/ariefhk",
  },
};

// destructuring
const { name, age, ...restUser } = user;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(restUser);
