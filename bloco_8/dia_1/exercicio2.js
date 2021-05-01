const betResult = (betNumber, callback) => {
  generateNumber = Math.ceil(Math.random() * 5);
  return callback() ? console.log('Parabéns você ganhou') : console.log('Tente novamente');
}

const checkFunction = (betNumber, generateNumber) => {
  return betNumber === generateNumber;
}

console.log(betResult(2, checkFunction));