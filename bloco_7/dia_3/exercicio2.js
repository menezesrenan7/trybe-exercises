const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.

// 2.1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// 2.2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 2.3. Verifique se o array passado por parâmetro não sofreu alterações.
const initial = [1, 2, 3, 4, 5];
const result = myRemove(initial, [1, 2, 3, 4, 5]);
assert.deepStrictEqual(result, initial);

// 2.4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
const arr = [1, 2, 3, 4];
const item = 5;
assert.deepStrictEqual(myRemove(arr, item), arr);