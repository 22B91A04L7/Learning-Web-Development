
const player1 = document.querySelector('#p1Name')
const p1CorrectBtn = document.querySelector("#p1Correct")
const p1WrongBtn = document.querySelector("#p1Wrong")
const p1ScoreDisplay = document.querySelector('#p1Score')

const player2 = document.querySelector('#p2Name')
const p2CorrectBtn = document.querySelector("#p2Correct")
const p2WrongBtn = document.querySelector("#p2Wrong")
const p2ScoreDisplay = document.querySelector('#p2Score')

const winningScoreHeader = document.querySelector('#winningScoreHeader')

const resetBtn = document.querySelector('#reset')
const winningScoreSelector = document.querySelector('#playTo')
const answerDisplay = document.querySelector('#display')

let winnningScore = parseInt(winningScoreSelector.value);
let isGameOver = false;
let p1Score = 0;


p1CorrectBtn.addEventListener('click', function(){

    if(!isGameOver){
         answerDisplay.textContent = "Correct Answer"
     p1Score += 1;
     if(p1Score === winnningScore){
        isGameOver = true
        player1.classList.add('winner')
        player2.classList.add('loser')
        disableBtns();
     }
    p1ScoreDisplay.textContent = p1Score;
   }
   
})

p1WrongBtn.addEventListener('click', function(){
    if(!isGameOver){
        answerDisplay.textContent = "Wrong Answer"
    }
})


let p2Score = 0;
p2CorrectBtn.addEventListener('click', function(){
    
        if(!isGameOver){
            answerDisplay.textContent = "Correct Answer"
        p2Score += 1;
        if(p2Score === winnningScore){
            isGameOver = true;
            player2.classList.add('winner')
            player1.classList.add('loser')
            disableBtns()
        }
    p2ScoreDisplay.textContent = p2Score;
    }
    
})

p2WrongBtn.addEventListener('click', function(){
    if(!isGameOver){
        answerDisplay.textContent = "Wrong Answer"
    }
})

resetBtn.addEventListener('click', reset)

winningScoreSelector.addEventListener('change', function(){
        winningScoreHeader.textContent = "Winning Score : "
        winnningScore = parseInt(this.value)
    reset()
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    player1.classList.remove('winner', 'loser')
    player2.classList.remove('winner', 'loser')
    isGameOver = false;
    enableBtns();
}

function disableBtns(){
    p1CorrectBtn.disabled = true;
    p2CorrectBtn.disabled = true;

    p1WrongBtn.disabled = true;
    p2WrongBtn.disabled = true;
}

function enableBtns(){
        p1CorrectBtn.disabled = false;
    p2CorrectBtn.disabled = false;
    p1WrongBtn.disabled = false;
    p2WrongBtn.disabled = false;
}


