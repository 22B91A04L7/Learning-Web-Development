const form = document.querySelector('form');

const userNameInput = document.querySelector('#userName')
const userNameShower = document.querySelector('#usernameShower')

const password = document.querySelector('#password')
const keyShower = document.querySelector('#keyShower')

const popup = document.querySelector('#popup')
const warning = document.querySelector('#warning')

userNameInput.addEventListener('input', function (e){
    userNameShower.textContent = `Current User : ${userNameInput.value}`
})

password.addEventListener('keyup', function (e){
    if(password.value.length >= 8){
         warning.textContent = "Strong password"
    }
    else{
        warning.textContent = "Weak password"
    }
        
    keyShower.textContent = `Pressed : ${e.key}`
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(userNameInput.value == ""){
        popup.textContent ="UserName required"
        return;
       
    }
    else if(password.value == ""){
        popup.textContent ="Password required"
        return;
    }
    else{
         popup.textContent = "Form Successfully Submitted"
         return;
    }

})
