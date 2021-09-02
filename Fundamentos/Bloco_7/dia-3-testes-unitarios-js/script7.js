/* Escreva a função wordLengths para passar nos testes já implementados */


const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words) {
    let charNumber = [];
    for (let index in words) {
        let toPush;
        toPush = words[index].length;
        charNumber.push(toPush);
    }
    return charNumber;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

