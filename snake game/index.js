const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const gridSize = 10;
canvas.width = 400;
canvas.height = 400;


const snake = [
    { x: 10, y: 10 },
];

let food = { x: 5, y: 5 };

let dx = 1;
let dy = 0;

let score = 0;

function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        food = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)),
            y: Math.floor(Math.random() * (canvas.height / gridSize)),
        };
    } else {
        snake.pop();
    }
}

function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width / gridSize ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height / gridSize
    ) {
        clearInterval(game);
        alert("Game Over! Your Score: " + score);
        restartGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            clearInterval(game);
            alert("Game Over! Your Score: " + score);
            restartGame();
        }
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawFood();
    drawSnake();
    moveSnake();
    checkCollision();
}

function changeDirection(event) {
    const keyPressed = event.key;

    switch (keyPressed) {
        case "ArrowLeft":
            if (dx !== 1) {
                dx = -1;
                dy = 0;
            }
            break;
        case "ArrowUp":
            if (dy !== 1) {
                dx = 0;
                dy = -1;
            }
            break;
        case "ArrowRight":
            if (dx !== -1) {
                dx = 1;
                dy = 0;
            }
            break;
        case "ArrowDown":
            if (dy !== -1) {
                dx = 0;
                dy = 1;
            }
            break;
    }
}

document.addEventListener("keydown", changeDirection);

let game;

document.getElementById("restart-button").addEventListener("click", () => {
    if (game) {
        clearInterval(game);
    }
    startGame();
});

function restartGame() {
    clearInterval(game);
    document.getElementById("restart-button").disabled = false;
}

function startGame() {
    snake.length = 1;
    snake[0] = { x: 10, y: 10 };
    food = { x: 5, y: 5 };
    dx = 1;
    dy = 0;
    score = 0;
    document.getElementById("restart-button").disabled = true;
    game = setInterval(update, 100);
}

startGame();
