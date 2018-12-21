/*
Logic Challenge - Konversi Menit
Problem

Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
Code

function konversiMenit(menit) {
  // you can only write your code here!
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
*/

function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    var mnt = menit % 60;
    if(String(jam).length < 2) {
        jam = '0' + jam;
    }
    
    if(String(mnt).length < 2) {
    mnt = '0' + mnt;
    }    
    
    return jam + ' : ' + mnt   
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00