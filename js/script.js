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

// return value is from the perspective of the player
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerSelection();
    let roundResult = playRound(getPlayerSelection(), computerSelection);

    if (roundResult === 'win') {
      console.log(`You won! The computer chose ${computerSelection}`);
      playerScore++;
    } else if (roundResult === 'loss') {
      console.log(`You lost! The computer chose ${computerSelection}`);
      computerScore++
    } else {
      console.log('It\'s a draw!');
    }
  }

  if (playerScore > computerScore) {
    console.log(`Your score: ${playerScore} \n` +
                `Computer score: ${computerScore} \n` +
                'Congrats! You won!');
  } else if (playerScore < computerScore) {
    console.log(`Your score: ${playerScore} \n` +
                `Computer score: ${computerScore} \n` +
                'Better luck next time! You lost!');
  } else {
    console.log(`Your score: ${playerScore} \n` +
                `Computer score: ${computerScore} \n` +
                'It\'s a draw!');
  }
}

game();