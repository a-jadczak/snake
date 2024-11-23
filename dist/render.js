import { boardElement } from "./main.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import Vector2 from "./vector2.js";
export const render = (board) => {
    renderBoard(board);
};
/// Apennd HTML elements to board based on board data and fills Board map
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
    console.log(board);
};
export const renderSnake = (snake, board) => {
    console.log("Snake position: (bellow)");
    console.log(snake.getFirstPosition());
    snake.move(board);
    snake.snakePositions.forEach(pos => {
        console.log(pos.toString());
        board.drawSquare(pos.toString(), "blue");
    });
    // Cleans board
    board.drawSquare(snake.previousTailPosition.toString(), "gray");
    //board.paint(snake.getFirstPosition().toString());
};
