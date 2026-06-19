
//map Method is similar to forEach method but,
// when used it creates a new array that stores elements from came from the call back function

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = nums.map(function (ele){
    return ele * 2;
})
//here res contains [] because map creates it with values from call back function

const movies = [
    {
        name : "OG",
        actor : "Pawan Kalyan"
    },
    {name : "Magadheera",
        actor : "Ram Charan"
    },
    {name : "Jersy",
        actor : "Nani"
    }
]

const moviesList = movies.map(function (movie){
    return `${movie.name.toUpperCase()} by ${movie.actor}`
})
// values are stored in moviesList[]
console.log(moviesList)

moviesList.forEach(function(ele){
    console.log(ele);
})