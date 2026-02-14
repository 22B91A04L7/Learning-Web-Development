function makeMystery(){
    const rand = Math.random();
    // console.log("Mystery function has been invoked!");
    if(rand > 0.5){
        console.log("Congrats, I am a good function!");
        return function(){
            console.log("Have a nice day!");
            alert("Have a nice day!");
        }
    }
    else{
        return function(){
            alert("I am an evil function, you have been warned!");
            alert("I am an evil function, you have been warned!");
            alert("I am an evil function, you have been warned!");
            console.log("I am an evil function, you have been warned!");
        }
    }
    
}

makeMystery();
makeMystery()();
