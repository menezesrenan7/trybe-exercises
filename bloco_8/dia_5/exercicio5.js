const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. 
const swap = ([a, b, c]) = [b, c, a];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);