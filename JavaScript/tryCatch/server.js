
try{
    str.toUpperCase();
}
catch{
    console.log("Error !!! str not defined");
}

try{
     i!=10;
     console.log(i);
}
catch{
    console.log("Error")
}

function print(temp){
    try{
        console.log(temp.toUpperCase().repeat(2));
    }
    catch{
        console.log("please pass string as argument !!")
    }
}