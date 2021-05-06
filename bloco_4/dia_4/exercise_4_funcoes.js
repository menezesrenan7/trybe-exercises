function nomeMaior(array) {
    let maiorNome = '';
    
    for (let index in array) {
        let palavra = array[index];
        let tamanho = palavra.length;
        if (tamanho > maiorNome.length) {
            maiorNome = palavra;
        }
    }
    return maiorNome;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

