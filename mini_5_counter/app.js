const addBtn = document.getElementById('add')
const subBtn = document.querySelector('#sub')
const resetBtn = document.querySelector('#reset')

const heading = document.querySelector('h2')

const counter = document.querySelector('#counter')

let count = 0;
counter.textContent = `${count}`

addBtn.addEventListener('click', ()=>{
    count++;
   counter.textContent = `${count}`
   heading.style.color = "red"


})

subBtn.addEventListener('click', () => {
    count--;
    counter.textContent = `${count}`
    heading.style.color = "blue"


})

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = `${count}`
heading.style.color = "green"

})