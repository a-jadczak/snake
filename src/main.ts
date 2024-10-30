import { Board } from "./board.js";
import { render, renderSnake } from "./render.js";
import { Snake } from "./snake.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import listenToPlayer  from "./input.js"

export const boardElement : HTMLElement = document.querySelector("#board");
const gameDataElement : HTMLElement = document.querySelector(".game-data");
const pointsElement = gameDataElement.querySelector(".points");
const difficultyElement = gameDataElement.querySelector(".difficulty");

let board : Board;
let snake : Snake;

const init = function()
{
    board = new Board()
    board.size = 10

    render(board);
    
    // Calculates start position based on boardSize
    const pos : number = Math.floor(board.size / 2);

    // Sets startPosition
    const startPosition : BoardSquare = new BoardSquare(pos, pos, undefined); //FIXME: Change undefined

    const snakeColor = "lawnGreen";

    snake = new Snake(startPosition, snakeColor);

    listenToPlayer();
}


const update = function() 
{
    renderSnake(snake, board);
}

init();

update();