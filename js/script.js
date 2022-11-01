let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.getElementById('your-score');
const computerScoreText = document.getElementById('computer-score');
const statusText = document.getElementById('status');

function getComputerSelection() {
  let choicesArray = ['rock', 'paper', 'scissors']
  let computerSelection = choicesArray[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function updateScreen(result, computerSelection) {
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

function playRound(playerSelection) {
  computerSelection = getComputerSelection();
  let roundResult;

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      let roundResult = 'draw';
      updateScreen(roundResult, computerSelection);        
      calculateWinner(playerScore, computerScore);
     } else if (computerSelection === 'paper') {
      let roundResult = 'loss';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    } else {
      let roundResult = 'win';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      let roundResult = 'win';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    } else if (computerSelection === 'paper') {
      let roundResult = 'draw';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    } else {
      let roundResult = 'loss';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      let roundResult = 'loss';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    } else if (computerSelection === 'paper') {
      let roundResult = 'win';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    } else {
      let roundResult = 'draw';
      updateScreen(roundResult, computerSelection); 
      calculateWinner(playerScore, computerScore);
    } 
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