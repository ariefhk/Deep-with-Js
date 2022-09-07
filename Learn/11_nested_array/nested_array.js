const user = {
  name: "Arief",
  age: 20,
  links: [
    {
      name: "Instagram",
      url: "instagram.com/ariefrh.dev",
    },
  ],
};

// before
console.log(user.links[0].name, user.links[0].url);

const {
  links: [{ name, url }],
} = user;

console.log(name, url);
