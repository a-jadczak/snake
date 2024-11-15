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
document.addEventListener("keydown", function (e) {
    const direction = getPlayerDirection(e.key);
    snake.changeDirection(direction);
});
const update = function () {
    renderSnake(snake, board);
};
init();
update();
