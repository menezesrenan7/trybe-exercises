function checkPalindrome(word) {
    let checkresult = true;
    let roundedHalfLength = Math.floor(word.length / 2)
    
    for (let index = 0; index <= roundedHalfLength; index += 1) {
        if (word[index] != word[word.length - 1 - index]) {
            checkresult = false;
            break;
        }
    }
    if (checkresult === true) {
        return 'A palavra especificada é um palíndromo.'
    } else {
        return 'A palavra especificada não é um palíndromo.'
    }
};

console.log(checkPalindrome('arara'));

// function checkPalindrome(word) {
//     let array = word.split('');
//     let reverse = array.reverse();

//     if ( array === reverse) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkPalindrome('leão'));