function getPlayerSelection() {
  let playerSelection = prompt('Please enter either rock, paper, or scissors!');
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

function getComputerSelection() {
  let choicesArray = ['rock', 'paper', 'scissors']
  let computerSelection = choicesArray[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
      return 'draw';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      return 'loss';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'draw';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'loss';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'loss';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'draw';
    } 
}