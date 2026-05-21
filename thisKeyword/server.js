const Laptop = {
    name : "Dell",
    price : 10000,
    storage : "256GB",
    fullDetails(){
        console.log(`name : ${this.name} , price : ${this.price},
            storage : ${this.storage}` )
    }
    
}
//this keyord points to the current object.
//Used to access members of the current object
console.log("this KeyWord");

const cat = {
    name : "Blue Steel",
    color : "grey",
    meow(){
        console.log(`${this.name} says MEOW MEOW`);
    }
}

const meow2 = cat.meow;
meow2(); // undefined says MEOW MEOW
// In the above code, when we assign cat.meow to meow2, we lose the context of 'this' which refers to the cat object. 
// Therefore, when we call meow2(), 'this.name' is undefined, resulting in "undefined says MEOW MEOW".