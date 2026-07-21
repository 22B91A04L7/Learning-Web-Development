const joke = require('give-me-a-joke')

joke.getRandomDadJoke(function (joke) {
    console.log(joke);
});

// npm package --> give-me-a-joke --> generates random jokes