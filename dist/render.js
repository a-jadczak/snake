import { boardElement } from "./main.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import Vector2 from "./Math/vector2.js";
export const render = (board) => {
    renderBoard(board);
};
/// Append HTML elements to board based on board data and fills Board map
const renderBoard = (board) => {
    boardElement.style.gridTemplateColumns = 'repeat(' + board.size + ', 1fr)';
    const fillBoardMap = (pos, boardSquare) => {
        board.boardMap.set(pos, boardSquare);
    };
    for (let i = 0; i < board.size; i++) {
        for (let j = 0; j < board.size; j++) {
            const element = document.createElement("div");
            element.classList.add("square");
            const elementPosition = new BoardSquare(new Vector2(j, i), element);
            // Appends elements to js board map
            fillBoardMap(elementPosition.vector2.toString(), elementPosition);
            // Appends elements to html board
            boardElement.appendChild(element);
        }
    }
};
const renderFruit = (board) => {
    const randomPosition = board.getRandomEmptySquare();
    const imageSource = "./../public/apple.svg";
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageSource);
    imageElement.classList.add("obstacle");
    const boardSquare = board.getSquare(randomPosition.toString());
    boardSquare.squareState = "fruit";
    boardSquare.htmlElement.appendChild(imageElement);
};
export const renderSnake = (snake, board) => {
    snake.move(board);
    snake.snakePositions.forEach(pos => {
        //console.log(pos.toString())
        board.paintSquare(pos.toString(), "blue");
    });
    // Cleans board
    board.paintSquare(snake.previousTailPosition.toString(), "gray");
    renderFruit(board);
};
