const maiorPalavra = frase => {
  let array = frase.split(' ');
  let sizeOfWords = [];
  for (let index = 0; index < array.length; index += 1) {
  sizeOfWords.push(array[index].length);
  }
  let largestNumber = sizeOfWords.reduce((a, b) => Math.max(a, b));
  let indexlargestNumber = sizeOfWords.indexOf(largestNumber);
  return array[indexlargestNumber];
}
console.log(maiorPalavra('Oi, tudo bem com você?'));