const ChangeColor = ((color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })

})

ChangeColor('magenta', 1000)
    .then(() => ChangeColor('yellow', 2000))
    .then(() => ChangeColor('red', 1000))
    .then(() => ChangeColor('navy', 2000))
    .catch(() => console.log("error"))

// async keyword makes the function to return a promise
// used to reduce code complexity  --> writing return new Promise()

async function rainbow() {
    await ChangeColor('magenta', 2000)
    await ChangeColor('yellow', 1000)
    await ChangeColor('green', 1000)
    await ChangeColor('blue', 1000)
    throw new Error("error in rainbow function")
    return "All set ...!!!"
}

rainbow().then((data) => console.log(data))
    .catch((e) => console.log("Error occured"))