const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');

let score = 0;
let timeLeft = 30;
let timerId;

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
     target.style.display = 'block';
    moveTarget();
    timerId = setInterval(updateTimer, 1000);
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

function moveTarget() {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);

    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timerId);
        alert("Time's up! Your final score: " + score);
        target.style.display = 'none'; // Hide the target when the game ends
        return;
    }
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;
}
