import { startConfetti, stopConfetti, removeConfetti } from "./confetti"

const playerScoreEl = document.getElementById("playerScore")
const playerChoiceEl = document.getElementById("playerChoice")
const computerScoreEl = document.getElementById("computerScore")
const computerChoiceEl = document.getElementById("computerChoice")
const resultText = document.getElementById("resultText")

const playerRock = document.getElementById("playerRock")
const playerPaper = document.getElementById("playerPaper")
const playerScissors = document.getElementById("playerScissors")
const playerLizard = document.getElementById("playerLizard")
const playerSpock = document.getElementById("playerSpock")
const computerRock = document.getElementById("computerRock")
const computerPaper = document.getElementById("computerPaper")
const computerScissors = document.getElementById("computerScissors")
const computerLizard = document.getElementById("computerLizard")
const computerSpock = document.getElementById("computerSpock")

const allGameIcons = document.querySelectorAll(".fa-regular ")

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = ""
let playerScoreNumber = 0
let computerScoreNumber = 0

// Reset all "selected" icons 
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected")
  })
  stopConfetti()
  removeConfetti()
}

// Reset Score & player/computer Choice 
function resetAll() {
  // Reset Score 
  playerScoreNumber = 0
  playerScoreEl.textContent = playerScoreNumber
  playerChoiceEl.textContent = ""

  computerScoreNumber = 0
  computerScoreEl.textContent = computerScoreNumber
  computerChoiceEl.textContent = ""

  // Reset Result
  resultText.textContent = ""

  // Reset selected Icons
  resetSelected()

}

// Random computer choice 
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 5)
  switch (computerChoiceNumber) {
    case 0:
      computerChoice = "rock"
      break
    case 1:
      computerChoice = "paper"
      break
    case 2:
      computerChoice = "scissors"
      break
    case 3:
      computerChoice = "lizard"
      break
    case 4:
      computerChoice = "spock"
      break    
  }
}

// Display computer random choice
function displayComputerRandomchoice() {
  //Add 'selected' styling & playerChoice
  switch (computerChoice) {
    case "rock": 
      computerRock.classList.add('selected')
      computerChoiceEl.textContent = " --- Rock"
      break
    case "paper": 
      computerPaper.classList.add('selected')
      computerChoiceEl.textContent = " --- Paper"
      break
    case "scissors": 
      computerScissors.classList.add('selected')
      computerChoiceEl.textContent = " --- Scissors"
      break
    case "lizard": 
      computerLizard.classList.add('selected')
      computerChoiceEl.textContent = " --- Lizard"
      break
    case "spock": 
      computerSpock.classList.add('selected')
      computerChoiceEl.textContent = " --- Spock"
      break
    default: 
      break
  }
}

// Check result, increase scores, update textResults
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie."
  } else {
    const choice = choices[playerChoice]
    if (choice.defeats.indexOf(computerChoice) >= 0) {
      resultText.textContent = "You Won!"
      startConfetti()
      playerScoreNumber++
      playerScoreEl.textContent = playerScoreNumber
    }
    else {
      resultText.textContent = "You Lost!"
      computerScoreNumber++
      computerScoreEl.textContent = computerScoreNumber
    }
  }
}

// Call funcitons to process turn
function checkResults(playerChoice) {
  resetSelected()
  computerRandomChoice()
  displayComputerRandomchoice()
  updateScore(playerChoice)
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResults(playerChoice)
  //Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock": 
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = " --- Rock"
      break
    case "paper": 
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = " --- Paper"
      break
    case "scissors": 
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent = " --- Scissors"
      break
    case "lizard": 
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent = " --- Lizard"
      break
    case "spock": 
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = " --- Spock"
      break
    default: 
      break
  }
}

// On load, set initial values
resetAll()
startConfetti()