//fetch is used to send requests that returns a promise


// fetch("https://swapi.dev/api/people/2")
//     .then((res) => {
//         console.log("It Loaded !!", res)
//         return res.json();
//     })
//     .then((data) => {
//         console.log("JSON done..!", data)
//         return fetch("https://swapi.dev/api/people/3")
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {
//         console.log("2nd json done")
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log("error", e)
//     })

const loadPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/2")
        const data = await res.json();
        console.log(data)
        const res2 = await fetch("https://swapi.dev/api/people/3")
        const data2 = await res2.json();
        console.log(data2)
    }
    catch (err) {
        console.log("ERROR !!", err)
    }
}

loadPeople()