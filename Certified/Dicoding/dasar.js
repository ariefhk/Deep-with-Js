// // /**
// //  * TODO:
// //  * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
// //  *  - firstName: bertipe data string, dengan nilai nama depan Anda.
// //  *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
// //  *  - age: bertipe data number, dengan nilai umur Anda.
// //  *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
// //  */

// // // TODO
// // let firstName = "Arief Rachman";
// // let lastName = "Hakim";
// // let age = 20;
// // let isMarried = false;

// // /**
// //  * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
// //  *  1. Jika score bernilai 90 atau lebih
// //  *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
// //  *  2. Jika score bernilai 80 hingga 89
// //  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
// //  *  3. Jika score bernilai 70 hingga 79
// //  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
// //  *  4. Jika score bernilai 60 hingga 69:
// //  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
// //  *  5. Jika score bernilai di bawah 60:
// //  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
// //  *
// //  *
// //  *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
// //  *        - Anda tidak perlu membuat variabel result dan score secara manual.
// //  *          Gunakan variabel yang sudah disediakan.
// //  *
// //  */

// // function scoreChecker(score) {
// //   let result;

// //   // TODO
// //   if (score >= 90) {
// //     result = "Selamat! Anda mendapatkan nilai A.";
// //   } else if (score >= 80 && score <= 89) {
// //     result = "Anda mendapatkan nilai B.";
// //   } else if (score >= 70 && score <= 79) {
// //     result = "Anda mendapatkan nilai C.";
// //   } else if (score >= 60 && score <= 69) {
// //     result = "Anda mendapatkan nilai D.";
// //   } else {
// //     result = "Anda mendapatkan nilai E.";
// //   }

// //   // Jangan hapus kode ini
// //   return result;
// // }

// let myString = "";

// try {
//   myString += "a";
//   throw Error();
// } catch (e) {
//   myString += "b";
// } finally {
//   myString += "c";
//   throw Error();
//   myString += "d";
// }

// console.log(myString);

// class NetworkError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NetworkError";
//   }
// }

// // TODO: 1
// const fetchingUserFromInternet = (isOffline) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isOffline) {
//         let user = { name: "John", age: 18 };
//         resolve(user);
//       } else {
//         reject(new NetworkError("Gagal mendapatkan data dari internet"));
//       }
//     }, 1000);
//   });
// };

// // TODO: 2
// async function gettingUserName(status) {
//   try {
//     const user = await fetchingUserFromInternet(status);
//     console.log(user);
//     // return user;
//   } catch (error) {
//     // return error.message;
//     console.log(error.message);
//   }
// }

// // console.log(gettingUserName());
// gettingUserName(true);

// const name = "Dicoding";
// const language = "JavaScript";

// console.log(`Hello $name. Welcome to $language!`);

// try {
//   const arr = [1, 2, 3, 4];
//   for (let i = 0; i <= 4; i++) {
//     console.log(arr[i]);
//   }
// } catch (e) {
//   console.log("Out of bounds");
// }

// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let user = "JSUser";
//       resolve(user);
//     }, 3000);
//   });
// }

// console.log("Fetching username...");
// const username = fetchUsername();
// console.log(`You are logged in as ${username}`);
// console.log("Welcome!");

// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("JSUser");
//     }, 3000);
//   });
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//   console.log(`You are logged in as ${value}`);
// });
// console.log("Welcome!");

console.log(Math.max(1, 2, 5));
