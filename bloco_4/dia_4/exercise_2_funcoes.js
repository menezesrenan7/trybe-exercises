let array1 = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {
    let maiorValor = 0;
    
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maiorValor) {
            maiorValor = array[index];
        }
    } return array.indexOf(maiorValor);
}

console.log(maiorIndice(array1));