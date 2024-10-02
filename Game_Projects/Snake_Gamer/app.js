const gameBoard = document.getElementById("gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.getElementById("scoreVal");

const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height;
const UNIT = 25;

let foodX;
let foodY;
let xVel = 25;
let yVel = 0;
let score = 0;
let active = true;
let started = false;
let paused = false;

let snake = [
    { x: UNIT * 3, y: 0 },
    { x: UNIT * 2, y: 0 },
    { x: UNIT, y: 0 },
    { x: 0, y: 0 },
];

window.addEventListener("keydown", keyPress);

startGame();

function startGame() {
    context.fillStyle = "gray";
    //fillRect(xStart, yStart, Width, height)
    context.fillRect(0, 0, WIDTH, HEIGHT);

    createFood();
    displayFood();
    drawSnake();
    // This is for one time call,
    //   if we want to repeat again & again use SetTimeout
    //   drawSnake();
    //   moveSnake();
    //   clearBoard();
    //   drawSnake();
}
function clearBoard() {
    context.fillStyle = "gray";
    //fillRect(xStart, yStart, Width, height)
    context.fillRect(0, 0, WIDTH, HEIGHT);
}

function createFood() {
    foodX = Math.floor((Math.random() * WIDTH) / UNIT) * UNIT;
    foodY = Math.floor((Math.random() * HEIGHT) / UNIT) * UNIT;
}

function displayFood() {
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, UNIT, UNIT);
}

function drawSnake() {
    context.fillStyle = "magenta";
    context.strokeStyle = "gold"; //white or try some other color
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x, snakePart.y, UNIT, UNIT);
        context.strokeRect(snakePart.x, snakePart.y, UNIT, UNIT);
    });
}

function moveSnake() {
    //adding snake head forward and popping tail behind to illustrate snake movement
    const head = { x: snake[0].x + xVel, y: snake[0].y + yVel };
    //unshift add the data in first index without any modification of array
    snake.unshift(head);
    //matching the move snake coordinate with food coordinate
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1; // i.e. score = score + 1;
        scoreText.textContent = score;
        createFood();
    } else snake.pop();
}

function nextTick() {
    if (active && !paused) {
        setTimeout(() => {
            clearBoard();
            displayFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 200); // decrease milliseconds to increase the speed of snake
    } else if (!active) {
        clearBoard();
        context.font = "bold 50px serif";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("Game Over !", WIDTH / 2, HEIGHT / 2);
    }
}

function keyPress(event) {
    if (!started) {
        started = true;
        nextTick();
    }

    //Space keys keycode is 32 standard code
    if (event.keyCode === 32) {
        if (paused) {
            paused = false;
            nextTick();
        } else {
            paused = true;
        }
    }

    //Arrow keys keycode is 37,38,39,40 standard code
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    switch (true) {
        // Left key pressed and not going on Right
        case event.keyCode == LEFT && xVel != UNIT:
            xVel = -UNIT;
            yVel = 0;
            break;

        // Right key pressed and not going on Left
        case event.keyCode == RIGHT && xVel != -UNIT:
            xVel = UNIT;
            yVel = 0;
            break;

        // Up key pressed and not going on Down
        case event.keyCode == UP && yVel != UNIT:
            xVel = 0;
            yVel = -UNIT;
            break;

        // Down key pressed and not going on Up
        case event.keyCode == DOWN && yVel != -UNIT:
            xVel = 0;
            yVel = UNIT;
            break;
    }
}

function checkGameOver() {
    switch (true) {
        case snake[0].x < 0:
        case snake[0].x >= WIDTH:
        case snake[0].y < 0:
        case snake[0].y >= HEIGHT:
            active = false;
            break;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            active = false;
        }
    }
}
