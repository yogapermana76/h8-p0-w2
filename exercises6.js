/*
1. Melakukan Looping Menggunakan While
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
Output

LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer                                                                              
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/


var i = 2;
var a = 20;

console.log('LOOPING PERTAMA');
while(i <= 20) {
    console.log(i + ' - I love coding');
    i+=2;
}

console.log('LOOPING KEDUA');
while(a > 0) {
    console.log(a + ' - I will become fullstack developer');
    a-=2;
}

/*
2. Melakukan Looping Menggunakan For
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
Hints

    Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement

Output

LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding 
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding 
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
*/

console.log('LOOPING PERTAMA');
for(b = 1; b <=20; b++) {
    console.log(b + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(x = 20; x >= 1; x--) {
    console.log(x + ' - I will become fullstack developer');
}

/*
3. Angka Ganjil dan Genap

Hint: kamu akan menggunakan kondisional juga di kasus ini.
Problem

    Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
    Di dalam perulangan, periksa setiap angka counter:
        Apabila angka counter adalah angka genap, tuliskan GENAP
        Apabila angka counter adalah angka ganjil, tuliskan GANJIL
    Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
    Pada 3 perulangan baru ini periksa setiap angka counter:
        Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
        Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
        "3 kelipatan 3" dan seterusnya.

output

//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 3, 
//output
"3 KELIPATAN 3" 
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 6, 
//output
"6 KELIPATAN 6" 
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 10, 
//output
"10 KELIPATAN 10" 
// dan seterusnya :)
*/
//==================================================================================================================================

for(c = 1; c <= 100; c++) {
    if(c % 2 == 0) {
        console.log(c + ' - BILANGAN GENAP');
    } else {
        console.log(c + ' - BILANGAN GANJIL');
    }
}

/*
//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)
*/

//==================================================================================================================================

for(d = 1; d <= 100; d += 2) {
    if(d % 3 == 0) {
        console.log(d + ' - KELIPATAN 3');
    } else {
        console.log(d);
    }        
}

/*
//contoh - untuk pertambahan counter 2
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 3, 
//output
"3 KELIPATAN 3" 
// dan seterusnya :)
*/

//==================================================================================================================================

for(e = 1; e <=100; e +=5) {
    if(e % 6 == 0) {
        console.log(e + ' - KELIPATAN 6');
    } else {
        console.log(e);
    }
}

/*
//contoh - untuk pertambahan counter 5
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 6, 
//output
"6 KELIPATAN 6" 
// dan seterusnya :)
*/

//==================================================================================================================================

for(f = 1; f <= 100; f += 9) {
    if(f % 10 == 0) {
        console.log(f + ' - KELIPATAN 10');
    } else {
        console.log(f);
    }
}

/*
//contoh - untuk pertambahan counter 9
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 10, 
//output
"10 KELIPATAN 10" 
// dan seterusnya :)
*/