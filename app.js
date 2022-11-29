const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    calculateResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) computerChoice = 'rock'
    else if (randomNumber === 2) computerChoice = 'scissors'
    else computerChoice = 'paper' 

    computerChoiceDisplay.innerHTML = computerChoice
}

function calculateResult() {
    if (computerChoice === userChoice) result.innerHTML = 'its a draw!'
    else if (computerChoice === 'rock' && userChoice !== 'paper') result.innerHTML = 'you lose!'
    else if (computerChoice === 'rock' && userChoice === 'paper') result.innerHTML = 'you win!'
    else if (computerChoice === 'paper' && userChoice !== 'scissors') result.innerHTML = 'you lose!'
    else if (computerChoice === 'paper' && userChoice === 'scissors') result.innerHTML = 'you win!'
    else if (computerChoice === 'scissors' && userChoice !== 'rock') result.innerHTML = 'you lose!'
    else if (computerChoice === 'scissors' && userChoice === 'rock') result.innerHTML = 'you win!'
}
