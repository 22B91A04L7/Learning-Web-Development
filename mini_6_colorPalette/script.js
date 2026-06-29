const redBtn = document.querySelector('#redColor')
const blueBtn = document.querySelector('#blueColor')
const greenBtn = document.querySelector('#greenColor')
const randomColor = document.querySelector('#randomColor')

const currColor = document.getElementById('currentColor')

const colorPallete = document.querySelector('#heading')


// redBtn.addEventListener('click', function (){
//     colorPallete.style.color = 'red'
//     currColor.innerText = 'Red'
//     currColor.style.color = 'red'
//     this.style.color = 'red'
// })

// blueBtn.addEventListener('click', function (){
//     colorPallete.style.color = 'blue'
//     currColor.innerText = 'Blue'
//     currColor.style.color = 'blue'
//      this.style.color = 'blue'
// })

// greenBtn.addEventListener('click', function (){
//     colorPallete.style.color = 'green'
//     currColor.innerText = 'Green'
//     currColor.style.color = 'green'
//      this.style.color = 'green'
// })

//random color generation
// randomColor.addEventListener('click', function (){
//     const newColor = generateRandomColor();
//     colorPallete.style.color = newColor
//     currColor.textContent = newColor
//     currColor.style.color = newColor
//     console.log(this)
//      this.style.color = newColor
// })

function generateRandomColor(){
    const r = Math.floor(Math.random() * 255 + 1 );
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb(${r}, ${g}, ${b})`
}


const buttons = document.querySelectorAll('button')

for(let btn of buttons){
    btn.addEventListener('click', function() {
      if(this.textContent.toLowerCase() == 'random'){
        const newColor = generateRandomColor();
        this.style.color = newColor;
        colorPallete.style.color = newColor;
        currColor.style.color = newColor
        currColor.textContent = newColor
      }
      else{
        const color = this.textContent.toLowerCase();
        colorPallete.style.color = color;
        currColor.style.color = color;
        currColor.textContent = color
        this.style.color = color
      }
    })
}
