import { Board } from "./board.js";
import { render, renderSnake } from "./render.js";
import { Snake } from "./snake.js";
import { Vector2 } from "./Vector/vector2.js";
export const boardElement = document.querySelector("#board");
const gameDataElement = document.querySelector(".game-data");
const pointsElement = gameDataElement.querySelector(".points");
const difficultyElement = gameDataElement.querySelector(".difficulty");
let board;
let snake;
const init = function () {
    board = new Board();
    board.size = 10;
    // Calculates start position based on boardSize
    const pos = Math.floor(board.size / 2);
    // Sets startPosition
    const startPosition = new Vector2(pos, pos);
    const snakeColor = "lawnGreen";
    snake = new Snake({ startPosition, snakeColor });
    render(board);
};
const update = function () {
    renderSnake(snake, board);
};
init();
update();
