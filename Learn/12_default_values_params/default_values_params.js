const marker = ({
  name = "Unknown",
  coords: { lon, lan } = {
    lon: 0,
    lan: 0,
  },
}) => {
  console.log(name, lon, lan);
};

// Jika data ada
const ciamis = {
  name: "Ciamis",
  coords: {
    lon: 21212,
    lan: 1231414,
  },
};

// Jika tidak ada data
const banjar = {};

// Jika data kurang
const tasik = {
  name: "Tasikmalaya",
};

// Pemanggilan
marker(ciamis);
marker(banjar);
marker(tasik);
