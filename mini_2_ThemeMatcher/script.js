let isDark = false;
const btn = document.getElementById('btn')

function toggleTheme(){
    if(!isDark){
        const body = document.querySelector('body')
        
        body.style.background = 'black'
        body.style.color = 'white'
        btn.innerText = "LightMode"
        isDark = !isDark;
    }
    else{
        const body = document.querySelector('body')
        body.style.background = 'white'
         body.style.color = 'black'
         btn.innerText = "Dark Mode"
        isDark = !isDark
    }
}

// btn.addEventListener('click', toggleTheme)