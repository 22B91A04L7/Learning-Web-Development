// files importing separately
const math = require('./math')
console.log(math);
console.log(math.add(4, 7));
console.log(math.PI);

// directory containing files importing
const cats = require('../cats')
console.log(cats);
