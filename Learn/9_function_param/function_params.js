const user = {
  name: "Arief Rachman Hakim",
  age: 20,
  country: "Indonesia",
  links: {
    ig: "instagram.com/ariefrh.dev/",
    github: "github.com/ariefhk",
  },
};

const greeting = ({ name, age, country, links: { ig, github } }) => {
  return `Welcome, my name ${name} age ${age} country ${country} mygithub ${github}`;
};

console.log(greeting(user));
