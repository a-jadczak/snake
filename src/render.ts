import { Board } from "./board.js";
import { boardElement } from "./main.js";
import { Snake } from "./snake.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import Vector2 from "./vector2.js";

export const render = (board : Board) : void =>
{
    renderBoard(board);
}

/// Apennd HTML elements to board based on board data and fills Board map
const renderBoard = (board: Board) : void =>
{
    boardElement.style.gridTemplateColumns = 'repeat('+board.size+', 1fr)';
    
    const fillBoardMap = (pos : string, boardSquare : BoardSquare) : void =>
    {
        board.boardMap.set(pos, boardSquare);
    }

    for (let i = 0; i < board.size; i++)
    {
        for (let j = 0; j < board.size; j++)
        {
            const element : HTMLElement = document.createElement("div");
            element.classList.add("square");
        
            const elementPosition : BoardSquare 
                = new BoardSquare(new Vector2(j, i), element);

            // Appends elements to js board map
            fillBoardMap(elementPosition.vector2.toString(), elementPosition)

            // Appends elements to html board
            boardElement.appendChild(element);
        }
    }
    console.log(board);

}

export const renderSnake = (snake : Snake, board : Board) : void =>
{
    console.log("Snake position: (bellow)")
    console.log(snake.getFirstPosition())

    snake.move(board);
    
    snake.snakePositions.forEach(pos => {
        console.log(pos.toString())
        board.drawSquare(pos.toString(), "blue");
    });

    // Cleans board
    board.drawSquare(snake.previousTailPosition.toString(), "gray");

    //board.paint(snake.getFirstPosition().toString());

}