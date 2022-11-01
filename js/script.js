let playerScore = 0;
let computerScore = 0;
let computerSelection;

const playerScoreText = document.getElementById('your-score');
const computerScoreText = document.getElementById('computer-score');
const statusText = document.getElementById('status');

function getComputerSelection() {
  let choicesArray = ['rock', 'paper', 'scissors']
  let computerSelection = choicesArray[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function updateScreen(result) {
  if (result === 'draw') {
    statusText.textContent = 'It\s a draw!';
  } else if (result === 'loss') {
    computerScore++;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    statusText.textContent = `Sorry! Computer chose ${computerSelection}!`;
  } else {
    playerScore++;
    playerScoreText.textContent = `Player score: ${playerScore}`;
    statusText.textContent = `Nice! Computer chose ${computerSelection}!`;
  }
}

function calculateWinner(score1, score2) {
  if (score1 === 5) {
    statusText.textContent = 'Congrats! You won!';
  } else if (score2 === 5) {
    statusText.textContent = 'You lost! Better luck next time!'
  }
}

// return value is from the perspective of the player
function playRound(playerSelection) {
    computerSelection = getComputerSelection();
    let roundResult;
    if (playerSelection === 'rock' && computerSelection === 'rock') {
      let roundResult = 'draw';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      let roundResult = 'loss';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      let roundResult = 'win';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      let roundResult = 'win';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
      let roundResult = 'draw';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      let roundResult = 'loss';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      let roundResult = 'loss';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      let roundResult = 'win';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
      let roundResult = 'draw';
      updateScreen(roundResult);
      calculateWinner(playerScore, computerScore);
    } 
}

const rockButton = document.getElementById('rock');

rockButton.addEventListener('click', () => {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }
  playRound('rock');
});

const paperButton = document.getElementById('paper');

paperButton.addEventListener('click', () => {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }
  playRound('paper');
});

const scissorsButton = document.getElementById('scissors');

scissorsButton.addEventListener('click', () => {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }
  playRound('scissors');
});