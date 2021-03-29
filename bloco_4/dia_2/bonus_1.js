let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let hold = 0;
// let menor = 200;
// let maior = 0;

// Encontra o menor valor do vetor:

// for (let index1 = 0; index1 < numbers.length; index1 += 1) {
//      let valor1 = numbers[index1];
    
//      if (valor1 < menor) {
//              menor = valor1;
//         }    
// }

// Encontra o maior valor do vetor:

// for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     let valor2 = numbers[index2];
   
//     if (valor2 > maior) {
//             maior = valor2;
//        }    
// }

// Compara valores de 2 em dois até que o menor valor alcance a posição 0 e, o maior valor, a posição (numbers.length - 1).

// do {
for (let indexSecond = 1; indexSecond < numbers.length; indexSecond += 1) {
    for (let index = 0; index < indexSecond; index += 1) {
        if (numbers[index] > numbers[indexSecond]) {
            hold = numbers[index];
            numbers[index] = numbers[indexSecond];
            numbers[indexSecond] = hold;
        }
    }
}
    
// } while (numbers[0] !== menor && numbers[numbers.length - 1] !== maior);


console.log(numbers);

// [5, 3, 9, 19, 8, 70, 2, 35, 27, 100] 

// [3, 5, 9, 8, 19, 2, 35, 27, 70, 100]

// [3, 5, 8, 9, 2, 19, 27, 35, 70, 100]

// [3, 5, 8, 2, 9, 19, 27, 35, 70, 100]

// [3, 5, 2, 8, 9, 19, 27, 35, 70, 100]

// [3, 2, 5, 8, 9, 19, 27, 35, 70, 100]

// [2, 3, 5, 8, 9, 19, 27, 35, 70, 100]