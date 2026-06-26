const text = document.getElementById('message');
const btn = document.querySelector('button')

function makeChanges(){
    if(text.classList.contains('unread')){
        text.classList.remove('unread')
    text.classList.add('read')
    text.textContent = 'No unread messages.'
    btn.innerText = 'Mark as Unread'
    }
    else{
        text.classList.remove('read')
    text.classList.add('unread')
    text.innerText  = 'You have 3 unread messages.'
    btn.innerText = 'Mark as read'
    }
}