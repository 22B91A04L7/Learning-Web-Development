const arr = [1, 2, 3, 4, 5];

function print(ele){
    console.log(ele);
}

arr.forEach(print);

arr.forEach(function(ele){
    console.log(`Sqaure of ${ele} is ${ele*ele}`);
})
//forEach is used to access each elements in an array
arr.forEach(function(e){
    try{
        console.log("NUmber :" + e);
    }
    catch{
        console.log("Some Error !!");
    }
})
//newer method is for of method where the usecase is same to forEach
for(let i of arr){
    console.log("Value of i : " + i);
}

arr.forEach(function (ele){
    
        if(ele % 2 == 0){
            console.log(ele);
        }
        else 
        console.log("Number is not Even");
  
})