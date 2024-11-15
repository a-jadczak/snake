import { boardElement } from "./main.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
export const render = (board) => {
    renderBoard(board);
};
/// Apennd HTML elements to board based on board data
const renderBoard = (board) => {
    boardElement.style.gridTemplateColumns = 'repeat(' + board.size + ', 1fr)';
    for (let i = 0; i < board.size; i++) {
        for (let j = 0; j < board.size; j++) {
            const element = document.createElement("div");
            element.classList.add("square");
            const elementPosition = new BoardSquare(j, i, element);
            // Appends elements to js board map
            board.boardMap.set(elementPosition.toString(), elementPosition);
            // Appends elements to html board
            boardElement.appendChild(element);
        }
    }
    console.log(board);
};
export const renderSnake = (snake, board) => {
    console.log("Snake position: (bellow)");
    board.getSquare(snake.START_POSITON.toString()).htmlElement.style.backgroundColor = "blue";
};
