import { GameInfo } from "./gameInfo.js";
import { render } from "./render.js";
import { Snake } from "./snake.js";
import { Vector2 } from "./Vector/vector2.js";
export const boardElement = document.querySelector("#board");
const gameDataElement = document.querySelector(".game-data");
const pointsElement = gameDataElement.querySelector(".points");
const difficultyElement = gameDataElement.querySelector(".difficulty");
let GAME_INFO;
let SNAKE;
const init = function () {
    GAME_INFO = new GameInfo();
    GAME_INFO.boardSize = 10;
    // Calculates start position based on boardSize
    const pos = Math.floor(GAME_INFO.boardSize / 2);
    // Sets startPosition
    const startPosition = new Vector2(pos, pos);
    SNAKE = new Snake({ startPosition });
    render(GAME_INFO);
};
const update = function () {
};
init();
