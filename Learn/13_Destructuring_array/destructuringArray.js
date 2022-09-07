const lang = ["Python", "Javascript", "Java"];

// with defaulparams
const [one, two, three, four = "Unknown"] = lang;

// destructuring Array
console.log(`Mylang: ${one}`);
console.log(`Mylang1: ${two}`);
console.log(`Mylang2: ${three}`);
console.log(`Mylang3: ${four}`);
