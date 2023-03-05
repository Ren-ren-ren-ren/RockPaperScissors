// Generate a random move for the computer
function computerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Determine the winner based on the game rules
function determineWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'Tie';
  } else if ((playerMove === 'rock' && computerMove === 'scissors') ||
             (playerMove === 'paper' && computerMove === 'rock') ||
             (playerMove === 'scissors' && computerMove === 'paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Add event listeners to the buttons
const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function() {
  playGame('rock');
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function() {
  playGame('paper');
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function() {
  playGame('scissors');
});

// Play the game when the player clicks a button
function playGame(playerMove) {
  const computer = computerMove();
  const result = determineWinner(playerMove, computer);
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `You played ${playerMove}, computer played ${computer}. ${result}`;

  // Display the corresponding GIF
  const yourGIF = document.getElementById('your-gif');
  const computerGIF = document.getElementById('computer-gif');
  yourGIF.innerHTML = `<img src="${playerMove}.gif">`;
  computerGIF.innerHTML = `<img src="${computer}.gif">`;

  // Determine the winner and apply corresponding classes to the result and GIF elements
  if (result === 'You win!') {
    resultElement.classList.add('win');
    yourGIF.classList.add('win');
    computerGIF.classList.add('lose');
  } else if (result === 'Computer wins!') {
    resultElement.classList.add('lose');
    yourGIF.classList.add('lose');
    computerGIF.classList.add('win');
  } else {
    resultElement.classList.remove('win', 'lose');
    yourGIF.classList.remove('win', 'lose');
    computerGIF.classList.remove('win', 'lose');
  }
}

// Reset the game when the player clicks the reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  resetGame();
});

function resetGame() {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Choose rock, paper, or scissors to play!';
  const yourGIF = document.getElementById('your-gif');
  const computerGIF = document.getElementById('computer-gif');
  yourGIF.innerHTML = '';
  computerGIF.innerHTML = '';
  resultElement.classList.remove('win', 'lose');
  yourGIF.classList.remove('win', 'lose');
  computerGIF.classList.remove('win', 'lose');
}
