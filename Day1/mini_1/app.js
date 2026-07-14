
const jokesList = document.querySelector('#jokes')
const btn = document.querySelector('button')
const getJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;
    } catch (error) {
        return "Sorry :( Joke not available"
    }
}

const addNewJoke = async () => {
    const newJokeText = await getJoke()
    const newLiJoke = document.createElement('li');
    newLiJoke.append(newJokeText)
    jokesList.append(newLiJoke)
}

btn.addEventListener('click', addNewJoke)
