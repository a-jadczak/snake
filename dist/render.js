import { boardElement } from "./main.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import Vector2 from "./Math/vector2.js";
export let lastRenderedFruit;
export const render = (board) => {
    renderBoard(board);
};
/// Append HTML elements to board based on board data and fills Board map
const renderBoard = (board) => {
    // clears board
    boardElement.innerHTML = "";
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
/// Append Fruit on the board
export const renderFruit = (board) => {
    const randomPosition = board.getRandomEmptySquare();
    const imageSource = "./../public/apple.svg";
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageSource);
    imageElement.classList.add("obstacle");
    const boardSquare = board.getSquare(randomPosition.toString());
    boardSquare.squareState = "fruit";
    boardSquare.htmlElement.appendChild(imageElement);
    lastRenderedFruit = { element: imageElement, position: randomPosition, state: "fruit" };
    return lastRenderedFruit;
};
export const unrender = (board, htmlElement2D) => {
    const boardSquare = board.getSquare(htmlElement2D.position.toString());
    // deletes content inside boardSquare
    boardSquare.htmlElement.innerHTML = "";
};
export const renderSnake = (snake, board) => {
    snake.move(board);
    snake.snakePositions.forEach(pos => {
        board.paintSquare(pos.toString(), snake.snakeColor);
    });
    board.paintSquare(snake.previousTailPosition.toString(), "green");
};
