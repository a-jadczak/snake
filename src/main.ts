import { Board } from "./board.js";
import { render, renderFruit, renderSnake } from "./render.js";
import { Snake } from "./snake.js";
import getPlayerDirection from "./input.js";
import Vector2 from "./Math/vector2.js";
import GameSettings from "./types/gameSettings.js";

export const boardElement : HTMLElement = document.querySelector("#board");
const gameDataElement : HTMLElement = document.querySelector(".game-data");
const pointsElement : HTMLElement = gameDataElement.querySelector(".points");

export const gameSettings: GameSettings = {
    snakeColor: "lawngreen",
    gameSpeed: 200,
    boardSize: 10
}

let board : Board;
let snake : Snake;
let intervalTime : number;
let currentDirection : Vector2 = Vector2.LEFT;

// Interval input flag to avoid double direction change that provides a bug
let inputIntervalFlag : boolean = false;

const init = function() : void
{
    board = new Board()
    board.applySettings(gameSettings);
    intervalTime = gameSettings.gameSpeed;

    render(board);

    // Sets startPosition
    const startPosition : Vector2 = calculateStartSnakePosition();
    const snakeColor = gameSettings.snakeColor;
    snake = new Snake(startPosition, snakeColor);

    renderFruit(board);
}

/// Calculates snake start position based on board size
const calculateStartSnakePosition = () : Vector2 =>
{
    // Calculates start position based on boardSize
    const pos : number = Math.floor(board.size / 2);

    // Sets startPosition
    const startPosition : Vector2 = new Vector2(pos, pos);

    return startPosition;
}


// FIXME: fix the bug when player's key input is too fast and validation of
// doesn't catch current backwards direction
document.addEventListener("keydown", function(e)
{
    if (inputIntervalFlag)
        return;
    
    currentDirection = getPlayerDirection(e.key);
    inputIntervalFlag = true;
});


// Function called every interval
const update = function() : void
{
    snake.setDirection(currentDirection);   
    renderSnake(snake, board);
    updateUI();

    inputIntervalFlag = false;
}

const updateUI = () =>
{
    pointsElement.textContent = snake.score.toString();
}

export const startGame = () =>
{
    init();
    setInterval(update, intervalTime);
}

//update();

//setInterval(update, interval);