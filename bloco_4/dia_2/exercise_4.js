let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sumOfNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sumOfNumbers += numbers[index];
}

let average = sumOfNumbers / numbers.length

if (average > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor que 20.');
}