import { Board } from "./board.js";
import { render, renderFruit, renderSnake } from "./render.js";
import { Snake } from "./snake.js";
import getPlayerDirection from "./input.js";
import Vector2 from "./Math/vector2.js";
export const boardElement = document.querySelector("#board");
const gameDataElement = document.querySelector(".game-data");
const pointsElement = gameDataElement.querySelector(".points");
const difficultyElement = gameDataElement.querySelector(".difficulty");
let board;
let snake;
const interval = 200;
let currentDirection = Vector2.LEFT;
// Interval input flag to avoid double direction change that provides a bug
let inputIntervalFlag = false;
const init = function () {
    board = new Board();
    board.size = 10;
    render(board);
    // Sets startPosition
    const startPosition = calculateStartSnakePosition();
    const snakeColor = "lawnGreen";
    snake = new Snake(startPosition, snakeColor);
    renderFruit(board);
};
/// Calculates snake start position based on board size
const calculateStartSnakePosition = () => {
    // Calculates start position based on boardSize
    const pos = Math.floor(board.size / 2);
    // Sets startPosition
    const startPosition = new Vector2(pos, pos);
    return startPosition;
};
// FIXME: fix the bug when player's key input is too fast and validation of
// doesn't catch current backwards direction
document.addEventListener("keydown", function (e) {
    if (inputIntervalFlag)
        return;
    currentDirection = getPlayerDirection(e.key);
    inputIntervalFlag = true;
});
// Function called every interval
const update = function () {
    snake.setDirection(currentDirection);
    renderSnake(snake, board);
    updateUI();
    inputIntervalFlag = false;
};
const updateUI = () => {
    pointsElement.textContent = snake.score.toString();
};
init();
update();
//setInterval(update, interval);
