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