/*
1. Menyusun Barisan Bintang
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
Skeleton Code

var rows1; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows1 = 5

*
*
*
*
*
*/
var rows1 = 5;

for(var i = 1; i <= rows1; i++) {
    console.log('*');
}


/*
2. Menyusun Barisan Bintang Dengan Nested Looping
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
Skeleton Code

var rows2; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows2 = 5

*****
*****
*****
*****
*****

*/
var rows2 = 5;

for(var i = 1; i <= rows2; i++) {
    var star = '';
    for(var a = 1; a <= rows2; a++) {
        star += '*';        
    }
    console.log(star);    
}

/*
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
Skeleton Code

var rows3; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows3 = 5

*
**
***
****
*****

*/

var rows3 = 5;

for(var i = 1; i <= rows3; i++) {
    var star = '';
    for(var b = 1; b <= i; b++) {
        star += '*';        
    }
    console.log(star);
}