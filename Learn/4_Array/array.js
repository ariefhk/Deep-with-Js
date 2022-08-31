// Array
console.log("Penjelasan Array");
let hobbies = ["coding", "learn", "sport"];
console.log(typeof hobbies);
console.log(hobbies.length);
console.log();

// Mengakses elemen di-array
console.log(`Mengakses elemen pertama dengan Array[0] ${hobbies[0]}`);
console.log(
  `Mengakses elemen terakhir dengan Array[array.length - 1] ${
    hobbies[hobbies.length - 1]
  }\n`
);

// Built-in Method Array
// - push: menambah 1 nilai ke array ke index paling belakang
// - pop: menghapus 1 nilai dari array index paling belakang
// - unshift: menambah 1 nilai ke array index paling depan (index 0)
// - shift: menghapus 1 nilai dari array index paling depan (index 0)
// - join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
// - sort: mengurutkan elemen di dalam array sesuai alphabet
// - slice: mengambil beberapa lapis data
// - splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
// - split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan

// .push() => menambah elemen diakhir array
console.log(".push()");
var numbers = [0, 1, 2];
console.log(`Before .push(): ${numbers}`);
numbers.push(3); //push nilai dibelakang array
numbers.push(4, 5); //bisa multi
console.log(`After .push(): ${numbers}\n`);

// .pop() => menghapus elemen terakhir array
console.log(".pop()");
var numbers = [0, 1, 2, 3, 4, 5];
console.log(`Before .pop(): ${numbers}`);
numbers.pop();
console.log(`After .pop(): ${numbers}\n`);

// .unshift() => Menambahkan elemen diawal array
console.log(".unshift()");
var numbers = [0, 1, 2, 3];
console.log(`Before .unshift(): ${numbers}`);
numbers.unshift(-1);
console.log(`After .unshift(): ${numbers}\n`);

// .shift() => Menghapus elemen pertama array
console.log(".shift()");
var numbers = [0, 1, 2, 3, 4, 5];
console.log(`Before .shift(): ${numbers}`);
numbers.shift();
console.log(`After .shift(): ${numbers}\n`);

// .sort() => Mengurutkan
console.log(".sort()");
// Ascending
var numbers = [12, 1, 5, 3];
console.log(`Before ascending .sort(): ${numbers}`);
numbers.sort((value1, value2) => value1 - value2);
console.log(`After ascending .sort(): ${numbers}`);

// Descending
var numbers = [12, 1, 5, 3];
console.log(`Before descending .sort(): ${numbers}`);
numbers.sort((value1, value2) => value2 - value1);
console.log(`After descending .sort(): ${numbers}\n`);

// .slice() => mengambil irisan dari array
var numbers = [0, 1, 2, 3];
var angka1 = numbers.slice(1, 3); //param1:awal, param2:akhir(tidak dihitung)
console.log(`Irisan dengan dua param: ${angka1}`);
var angka2 = numbers.slice(1); //satu param sampe indeks terakhir
console.log(`Irisan dengan satu param: ${angka2}`);

// .splice() => menghapus atau menambahkan niai elemen pada array
var fruits = ["banana", "orange", "grape"];
fruits.splice(1, 0, "watermelon"); // param1:posisi, param2:jumlah, param3:isi
console.log(fruits);

var fruits = ["banana", "orange", "grape"];
fruits.splice(0, 2);
console.log(fruits);

// .split() => memecah sebuah string sehingga menjadi sebuah array
var biodata = "Arief Budi Laksono";
var name = biodata.split(" ");
console.log(name);

// .join() => menyatukan sebuah string
var title = ["My", "first", "experience", "as", "programmer"];
var string = title.join(" ");
console.log(string);

// Multidimensional Array
var arrayMulti = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Maka sebagai gambaran, indeks dari array tersebut adalah
/*
    [
        [(0,0), (0,1), (0,2)],
        [(1,0), (1,1), (1,2)],
        [(2,0), (2,1), (2,2)]
    ] 
*/
console.log(arrayMulti[0][0]); // 1
console.log(arrayMulti[1][0]); // 4
console.log(arrayMulti[2][1]); // 8
