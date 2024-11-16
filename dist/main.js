import { Board } from "./board.js";
import { render, renderSnake } from "./render.js";
import { Snake } from "./snake.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import getPlayerDirection from "./input.js";
export const boardElement = document.querySelector("#board");
const gameDataElement = document.querySelector(".game-data");
const pointsElement = gameDataElement.querySelector(".points");
const difficultyElement = gameDataElement.querySelector(".difficulty");
let board;
let snake;
const interval = 200;
let currentDirection = BoardSquare.LEFT;
// Interval input flag to avoid double direction change that provides a bug
let inputIntervalFlag = false;
const init = function () {
    board = new Board();
    board.size = 10;
    render(board);
    // Calculates start position based on boardSize
    const pos = Math.floor(board.size / 2);
    // Sets startPosition
    const startPosition = new BoardSquare(pos, pos, undefined); //FIXME: Change undefined
    const snakeColor = "lawnGreen";
    snake = new Snake(startPosition, snakeColor);
};
// FIXME: fix the bug when player's key input is too fast and validation of
// doesn't catch current backwards direction
document.addEventListener("keydown", function (e) {
    if (inputIntervalFlag)
        return;
    currentDirection = getPlayerDirection(e.key);
    console.log(currentDirection);
    inputIntervalFlag = true;
});
// Function called every interval
const update = function () {
    snake.setDirection(currentDirection);
    renderSnake(snake, board);
    inputIntervalFlag = false;
};
init();
update();
//setInterval(update, interval);
