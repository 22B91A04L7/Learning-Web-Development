const input = document.querySelector('#input');
const button = document.querySelector('#addButton')

const updatedList = document.querySelector('#list')

const livePreview = document.querySelector('#printer');

input.addEventListener('input', function(e){
    if(input.value == ""){
        livePreview.textContent = "";
    }
    else{
        livePreview.textContent = `Typing: ${input.value}`
    }
})

input.addEventListener('change', function(){
    livePreview.textContent = `Final: ${input.value}`
})

button.addEventListener('click', function(e){
    if(input.value != ""){
    const newList = document.createElement('li')
    newList.textContent = input.value;
    updatedList.appendChild(newList)
    input.value = ""
    livePreview.textContent = ""
    }
    else{
        livePreview.textContent = "type something!!"
    }
})

updatedList.addEventListener('click', function(e){
   const text =  e.target.textContent;
   if(text.startsWith("✔")){
    e.target.textContent = text.substring(1)
   }
   else{
    e.target.textContent = "✔" + text;
   }
})

updatedList.addEventListener('dblclick', function(e){
    if(e.target.tagName !== 'LI')
    e.target.remove()
})

