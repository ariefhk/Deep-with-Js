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
const {
  links: { ig, github },
} = user;

console.log("=================");
console.log(`Ig: ${ig}`);
console.log(`Github: ${github}`);
