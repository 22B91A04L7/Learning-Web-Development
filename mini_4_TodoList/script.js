const inputBlock = document.querySelector('input')
const title = document.querySelector('h1')

const ulist = document.createElement('ul');
title.appendChild(ulist)

function createTask() {
const parent = ulist

    const list = document.createElement('li');
    list.innerText = inputBlock.value

    const btn = document.createElement('button')
    
    btn.innerText = 'Delete'

    list.appendChild(btn)
    parent.appendChild(list)

    inputBlock.value = ''
   
    btn.onclick = function deleteParent(){
    btn.parentElement.remove()
    }
}







