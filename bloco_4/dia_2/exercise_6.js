let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odd = [];


for (let index = 0; index < numbers.length; index += 1) {

    if (numbers[index] % 2 !== 0) {
        odd.push(numbers[index]);
    }
}

if (odd.length === 0) {
    console.log('nenhum valor ímpar encontrado.');
} else {
    console.log(odd);
}