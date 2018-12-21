/*
Logic Challenge - X dan O
Problem

Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
Code

function xo(str) {
  // you can only write your code here!
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
*/

function xo(str) {
    var counterO = 0;
    var counterX = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'o') {
            counterO = counterO + 1;
        } else if(str[i] === 'x') {
            counterX = counterX + 1;
        }
    }
    if(counterO === counterX) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true