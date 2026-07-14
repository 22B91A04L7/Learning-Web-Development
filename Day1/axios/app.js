axios.get("https://swapi.dev/api/people/1")
    .then((res) => {
        console.log(res.data)
    })
    .catch((e) => {
        console.log("ERROR", e)
    })

//same using async funtion and await keyword
const getStarPeople = async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(res.data)

}

getStarPeople(5)
getStarPeople(2)
getStarPeople(1)