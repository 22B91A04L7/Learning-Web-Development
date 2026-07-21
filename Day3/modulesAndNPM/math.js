const add = (x, y) => {
    return x + y;
}

const sqaure = (x) => {
    return x * x;
}
const PI = 3.14


// exports.sqaure = sqaure
// exports.add = add
// exports.PI = PI


const math = {
    add: add,
    PI: PI,
    sqaure: sqaure
}
module.exports = math
