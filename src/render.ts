import { Board } from "./board.js";
import { boardElement } from "./main.js";
import { Snake } from "./snake.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";

export const render = (board : Board) : void =>
{
    renderBoard(board);
}

/// Apennd HTML elements to board based on board data
const renderBoard = (board: Board) : void =>
{
    boardElement.style.gridTemplateColumns = 'repeat('+board.size+', 1fr)';

    for (let i = 0; i < board.size; i++)
    {
        for (let j = 0; j < board.size; j++)
        {
            const element = document.createElement("div");
            element.classList.add("square");
        
            const elementPosition = new BoardSquare(j, i, element);

            // Appends elements to js board map
            board.boardMap.set(elementPosition.id, elementPosition);

            // Appends elements to html board
            boardElement.appendChild(element);
        }
    }

    console.log(board);
}

export const renderSnake = (snake : Snake, board : Board) : void =>
{
    console.log("Snake position: (bellow)")
    console.log(snake.START_POSITON);
    //board.board.get(snake.snakePositions[0]).style.backgroundColor = "brown";
}