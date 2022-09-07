const fruits = () => {
  return ["apple", "manggo", "orange"];
};

const fruits1 = () => {
  return ["apple", "manggo", "orange"];
};

// destructuring
const [a, m, o] = fruits();

// skipping array
const [, m1, o1] = fruits1();

console.log(a, m, o);
console.log(m1, o1);
