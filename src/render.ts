import { Board } from "./board.js";
import { boardElement } from "./main.js";
import { Snake } from "./snake.js";
import { Vector2 } from "./Vector/vector2.js";

export const render = (board : Board) : void =>
{
    renderBoard(board);
}

const renderBoard = (board: Board) : void =>
{
    boardElement.style.gridTemplateColumns = 'repeat('+board.size+', 1fr)';

    for (let i = 0; i < board.size; i++)
    {
        for (let j = 0; j < board.size; j++)
        {
            const element = document.createElement("div");
            element.classList.add("square");
        
            const elementPosition = new Vector2(j, i);

            board.board.set(elementPosition, element);

            boardElement.appendChild(element);
        }
    }

    console.log(board);
}

export const renderSnake = (snake : Snake, board : Board) : void =>
{
    console.log(snake.snakePositions);
    //board.board.get(snake.snakePositions[0]).style.backgroundColor = "brown";
}