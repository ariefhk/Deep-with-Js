console.log("String adalah kumpulan char");
let sentences = "I like coding Javascript";
console.log(sentences[0]);
console.log(sentences[2], "\n");

// String Properties
// .lenth => mengembalikkan panjang suatu string
console.log(".lenth");
let word = "Javascript is awesome banget";
console.log(word.length, "\n");

// String Method
// .chartAt() => mengembalikkan indeks yang diinginkan
console.log(".chart()");
console.log("I am a String bro".charAt(3), "\n");

// .concat() => menggabungkan string mereturn jadi string baru
console.log(".concat()");
let str1 = "Good";
let str2 = "Morning";
console.log(str1.concat(" ", str2), "\n");

// .indexOf() => mengembalikan indeks
console.log(".indexOf()");
let text = "Hello Bro, Gua Arief";
console.log(text.indexOf("Hello"));
console.log(text.indexOf("Bro"));
console.log(text.indexOf("Alex"), "\n");

// .substring() => cut char menjadi string baru
console.log(".substring()");
let jenisKucing = "Kucing Anggora";
let hewan = jenisKucing.substring(0, 6);
console.log(hewan, "\n");

// .toUpperCase() => menjadi Kapital
console.log(".toUpperCase()");
let wordNew = "I love Coding";
let wordNewUpper = wordNew.toUpperCase();
console.log(`Before: ${wordNew}`);
console.log(`After: ${wordNewUpper}\n`);

// .toLowerCase() => menjadi kecil
console.log(".toLowerCase()");
let wordBaru = "I love you bestie";
let wordBaruLower = wordBaru.toLowerCase();
console.log(`Before: ${wordBaru}`);
console.log(`After: ${wordBaruLower}\n`);

// .trim() => menghapus whitespace pada awal dan akhir
console.log(".trim()");
let username = " admin ";
let newUsername = username.trim();
console.log(`Before: ${username}`);
console.log(`After: ${newUsername}\n`);

// Mengubah Tipe Data
// .string()
console.log(".string()");
var int = 12;
var real = 3.45;
var arr = [6, 7, 8];

var strInt = String(int);
var strReal = String(real);
var strArr = String(arr);

console.log(strInt); // '12'
console.log(strReal); // '3.45'
console.log(strArr, "\n"); // '6,7,8'

// .toString()
console.log(".toString()");
var numberNew2 = 21;
console.log(numberNew2.toString()); // '21'
console.log(`numberNew2 type ${typeof numberNew2.toString()}`);
var array = [1, 2];
console.log(array.toString()); // '1,2'
console.log(`array type ${typeof array.toString()} \n`);

// parseInt([String]) dan parseFloat([String])
console.log("parseInt([String]) dan parseFloat([String])");
var int = "85";
var real = "55.9";
var strInt_1 = parseInt(int); // nilai strInt_1 = 85 dengan tipe data number
var strInt_2 = parseInt(real); // nilai strInt_2 = 56 dengan tipe data number dan nilai decimal dibelakang koma terpotong
var strReal_1 = parseFloat(int); // nilai strReal_1 = 85 dengan tipe data number
var strReal_2 = parseFloat(real); // nilai strReal_2 = 55.9 dengan tipe data number dan nilai decimal dibelakang koma tidak terpotong
