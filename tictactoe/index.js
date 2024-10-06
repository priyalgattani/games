let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const playAgainButton = document.querySelector('.play-again');

function makeMove(cell) {
  if (cell.textContent === '' && !checkWinner()) {
    cell.textContent = currentPlayer;
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    message.textContent = `Player ${currentPlayer}'s turn`;
    cell.style.backgroundColor = '#f0f0f0';
    cell.style.color = '#333';
  }
  if (checkWinner()) {
    message.textContent = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
    message.classList.add('message-winner');
    playAgainButton.style.display = 'block';
  } else if ([...cells].every(cell => cell.textContent !== '')) {
    message.textContent = "It's a draw!";
    message.classList.add('message-draw');
    playAgainButton.style.display = 'block';
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = '#ddd';
    cell.style.color = '#333';
  });
  currentPlayer = 'X';
  message.textContent = "Player X's turn";
  message.classList.remove('message-winner', 'message-draw');
  playAgainButton.style.display = 'none';
}
