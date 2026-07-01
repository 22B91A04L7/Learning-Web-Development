const form = document.querySelector('form');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty')
const list = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const productName = product.value;
    const qty = quantity.value;
    const newList = document.createElement('li');
    newList.textContent = `${qty} ${productName}`
    list.appendChild(newList)
})
