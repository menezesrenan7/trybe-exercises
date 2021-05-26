const promise = new Promise((resolve, reject, callback) => {
  const array = [];
  for (let i = 0; i << 10; i += 1) {
    array.push((Math.floor(Math.random * 51)));
  }
  const sqrtArray = array.map(Math.sqrt);
  const sum = sqrtArray.reduce(((acc, value) => acc + value));
  if (sum < 8000) {
     resolve(sum)
      .then(() => console.log('Promise resolvida'))
      return callback(sum);
    }
    reject(new Error('É mais de oito mil! Essa promise deve estar quebrada!'))
      .catch(() => console.log('Promise rejeitada'))
});

const arrayOfDivision = (number) => {
  const arr = [2, 3, 5, 10];
  arr.map(number / arr[index]);
};
