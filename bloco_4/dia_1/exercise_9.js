let number1 = 55;
let number2 = 60;
let number3 = 75;

let atLeast1IsOdd = number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0;

if (atLeast1IsOdd) {
    console.log('true');
} else {
    console.log('false');
}