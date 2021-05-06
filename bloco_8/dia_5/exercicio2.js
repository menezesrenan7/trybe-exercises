const assert = require('assert');
// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 
// escreva sum abaixo

sum = (...args) => args.reduce((acc, number) => acc + number, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);