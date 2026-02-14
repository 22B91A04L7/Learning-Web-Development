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

// Today we have seen that functions can be returned from other functions. This is a powerful concept in JavaScript and is the basis for many advanced techniques such as closures and higher-order functions. In the next section, we will explore how to use these concepts to create more complex and useful functions.
