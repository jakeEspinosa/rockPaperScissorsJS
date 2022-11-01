function getComputerSelection() {
  let choicesArray = ['rock', 'paper', 'scissors']
  let computerSelection = choicesArray[Math.floor(Math.random() * 3)];
  return computerSelection;
}

// return value is from the perspective of the player
function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    if (playerSelection === 'rock' && computerSelection === 'rock') {
      resultsContainer.textContent = 'draw';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      resultsContainer.textContent = 'loss';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      resultsContainer.textContent = 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      resultsContainer.textContent = 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
      resultsContainer.textContent = 'draw';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      resultsContainer.textContent = 'loss';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      resultsContainer.textContent = 'loss';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      resultsContainer.textContent = 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
      resultsContainer.textContent = 'draw';
    } 
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  if (roundResult === 'win') {
    console.log(`You won! The computer chose ${computerSelection}`);
    playerScore++;
  } else if (roundResult === 'loss') {
    console.log(`You lost! The computer chose ${computerSelection}`);
    computerScore++
  } else {
    console.log('It\'s a draw!');
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


const rockButton = document.getElementById('rock');

rockButton.addEventListener('click', () => {
  playRound('rock');
});

const paperButton = document.getElementById('paper');

paperButton.addEventListener('click', () => {
  playRound('paper');
});

const scissorsButton = document.getElementById('scissors');

scissorsButton.addEventListener('click', () => {
  playRound('scissors');
});

const resultsContainer = document.querySelector('#results-container');