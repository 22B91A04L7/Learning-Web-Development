console.log("Hello World!");
// Defining methods in object
const myMath = {
        Pi : 3.14,
        square : function(num){
            return num * num;
        },
        cube : function(num){
            return num ** 3;
        }
}
// methods in object
const Math = {
    name : "Venkat",
    square(n){
        return n * n;
    },

    cube(n){
        return n ** 3;
    }

}

function add(n1, n2){
    return n1+n2;
}
console.log("square " + myMath.square(3));
console.log("Cube of 2 is " + myMath.cube(2));
const sum = add(1, 10);
console.log("Sum is : " +sum);



