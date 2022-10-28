function getPlayerSelection() {
  let playerSelection = prompt('Please enter either rock, paper, or scissors!');
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}