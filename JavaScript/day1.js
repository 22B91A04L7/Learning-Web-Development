
function rollDice() {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
}

function callTwice(funct){
    funct();
    funct();
}

console.log("Rolling the dice once:");
rollDice();
console.log("Rolling the dice twice:");
callTwice(rollDice);



function callTenTimes(f){
    console.log("Rolling the dice ten times:");
    for(let i=1; i<=10; i++){
        f();
    }
}

callTenTimes(rollDice);
