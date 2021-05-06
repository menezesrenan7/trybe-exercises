function vefificaFimPalavra(string1, string2) {
           
        // Encontra o caractere inicial de comparação na string1.
        let initialCharact = string2.length - string1.length - 1;
        
        // Extrai a parte final da string1 que é do tamanho da string2.
        let reducedString = string1.substr(initialCharact, string2.length);
        
        // Compara a parte final da string1 com a string2.
        return reducedString === string2;
}

console.log(vefificaFimPalavra('trybe', 'be'));

