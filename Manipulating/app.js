const allImages = document.getElementsByTagName('img');
console.log(allImages)


// for(let image of allImages){
//     image.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
// }


const images = document.getElementsByClassName('square')

for(let img of images){
    img.src = "https://images.unsplash.com/photo-1763517174823-61148e142c8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhY2luZyUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D"
}
// has to be at last becoz app.js loads at end of body
allImages[2].src = "https://plus.unsplash.com/premium_photo-1664303893633-1544fcd8baed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHJhY2luZyUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D";




// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }
