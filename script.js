const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");
const startMessage = document.getElementById("start-message");
const gameOverElement = document.getElementById("game-over");
const retryButton = document.getElementById("retry-button");
const gameOverHighscoreElement = document.getElementById("game-over-highscore");

const box = 20;
let snake = [];
let score = 0;
let highscore = 0;
let direction;
let gameStarted = false;
let game;

function init() {
    snake = [];
    snake[0] = { x: 9 * box, y: 10 * box };
    direction = null;
    score = 0;
    scoreElement.textContent = score;
    highscoreElement.textContent = highscore;
    gameOverHighscoreElement.textContent = highscore;
    gameOverElement.style.display = "none";
    startMessage.style.display = "block";
    clearInterval(game);
}

function resetGame() {
    init();
    gameStarted = true;
    startMessage.style.display = "none";
    game = setInterval(draw, 100);
}

document.addEventListener("keydown", changeDirection);
retryButton.addEventListener("click", () => {
    resetGame();
    gameOverElement.style.display = "none";
});

function changeDirection(event) {
    if (!gameStarted) {
        gameStarted = true;
        startMessage.style.display = "none";
        game = setInterval(draw, 100);
    }

    if (event.keyCode === 37 && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.keyCode === 38 && direction !== "DOWN") {
        direction = "UP";
    } else if (event.keyCode === 39 && direction !== "LEFT") {
        direction = "RIGHT";
    } else if (event.keyCode === 40 && direction !== "UP") {
        direction = "DOWN";
    }
}

function draw() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "#61dafb" : "#ffffff";
        ctx.strokeStyle = "#282c34";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "#ff6f61";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        scoreElement.textContent = score;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore;
            gameOverHighscoreElement.textContent = highscore;
        }
        gameOverElement.style.display = "block";
    }

    snake.unshift(newHead);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};

init();
