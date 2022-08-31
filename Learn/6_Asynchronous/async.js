// setTimeout(() => {
//   console.log("Saya dijalankan belakangan");
// }, 3000);
// console.log("Saya dijalankan pertama");

// const periksaDokter = (nomerAntri, callback) => {
//   if (nomerAntri > 50) {
//     callback(false);
//   } else if (nomerAntri < 10) {
//     callback(true);
//   }
// };

// periksaDokter(100, (check) => {
//   if (check) {
//     console.log("Sebentar lagi giliran saya");
//   } else {
//     console.log("Masih lama nunggu dulu");
//   }
// });

// var isMommyHappy = true;
// let willGetNewPhone = new Promise((resolve, reject) => {
//   if (isMommyHappy) {
//     let phone = {
//       brand: "Samsung",
//       color: "black",
//     };
//     resolve(phone);
//   } else {
//     let reason = new Error("mom not happy");
//     reject(reason);
//   }
// });

// // willGetNewPhone
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((error) => {
// //     console.log(error.message);
// //   });

// willGetNewPhone.then((value) => {
//   console.log(value);
// });

// const helperPromise = (x, y) => {
//   const promise = new Promise((resolve, reject) => {
//     if (x === y) {
//       resolve("String sama aja bro");
//     } else {
//       reject("String beda");
//     }
//   });

//   return promise;
// };

// const demoPromise = async (x, y) => {
//   try {
//     let message = await helperPromise(x, y);
//     console.log(message);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// };

// demoPromise("aku sayang kamu", "aku sayang kamu");

const periksaDokter = (antrian) => {
  const promise = new Promise((resolve, reject) => {
    if (antrian > 50) {
      let message = "Inimah masih lama, pulang dulu ah";
      resolve(message);
    } else if (antrian <= 50) {
      let message2 = "Dikit lagi nih, udh g sabar";
      resolve(message2);
    } else {
      reject("Inputan Anda bukan Number!");
    }
  });
  return promise;
};

const angkaKartu = async (number) => {
  try {
    const perkataanku = await periksaDokter(number);
    console.log(perkataanku);
  } catch (error) {
    console.log(error);
  }
};

angkaKartu(10);
