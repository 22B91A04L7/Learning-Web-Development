
const searchShower = document.querySelector('#shower')

const form = document.querySelector('#TVsearchForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    //function to clear images before loading
    clearImages();

    const searchTerm = form.elements.query.value //user search value
    searchShower.textContent = `Showing results for ${searchTerm}` //display text
    let showsList;
    try {
        showsList = await searchTvShows(searchTerm)
    }
    catch (e) {
        searchShower.textContent = "Something Went Wrong..!";
        return;
    }
    generateImage(showsList.data)
    form.elements.query.value = ""
}

)

const searchTvShows = async (searchTerm) => {
    try {
        const config = { params: { q: searchTerm } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
        return res
    }
    catch (e) {
        throw e;
    }
}

const resultContainer = document.querySelector('#container')
const generateImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('img');
            newImg.classList.add('showStyle')
            newImg.src = result.show.image.medium;
            resultContainer.append(newImg)
        }
    }
}
const clearImages = () => {
    const images = document.querySelectorAll('img');
    for (let image of images) {
        image.remove()
    }
}