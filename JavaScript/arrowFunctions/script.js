
console.log(add(2, 3));

function add(x, y) {
    return x + y;
} // function declaration --> can be called from any where

const sub = function (x, y) {
    return x - y;
} // function expression --> that stores function in a variable
// must ne used after the expression

console.log(sub(5, 4))

//arrow function --> same work like function expression
const sqaure = (side) => {
    return side * side;
}

//arrow function with no arguments but empty paranthesis should be present
const rollDice = () => {
    return Math.floor(Math.random() * 6 + 1);
}

// string argument
const greet = (name) => {
    return "Hey" + name + "!"
}

