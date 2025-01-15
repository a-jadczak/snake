import { Board } from "./board.js";
import { boardElement } from "./main.js";
import { Snake } from "./snake.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import Vector2 from "./Math/vector2.js";
import Fruit from "./Obstacles/fruit.js";

export const render = (board : Board) : void =>
{
    renderBoard(board);
}

/// Append HTML elements to board based on board data and fills Board map
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
        
            const elementPosition : BoardSquare = new BoardSquare(new Vector2(j, i), element);

            // Appends elements to js board map
            fillBoardMap(elementPosition.vector2.toString(), elementPosition)

            // Appends elements to html board
            boardElement.appendChild(element);
        }
    }
}

const renderFruit = (board: Board) =>
{
    const randomPosition = board.getRandomEmptySquare();
    const imageSource = "./../public/apple.svg";
    
    const imageElement: HTMLElement = document.createElement("img");
    imageElement.setAttribute("src", imageSource);
    imageElement.classList.add("obstacle");

    const boardSquare = board.getSquare(randomPosition.toString());
    boardSquare.squareState = "fruit";
    boardSquare.htmlElement.appendChild(imageElement);
} 

export const renderSnake = (snake : Snake, board : Board) : void =>
{
    snake.move(board);
    
    snake.snakePositions.forEach(pos => {
        //console.log(pos.toString())
        board.paintSquare(pos.toString(), "blue");
    });

    // Cleans board
    board.paintSquare(snake.previousTailPosition.toString(), "gray");
    renderFruit(board);
}
