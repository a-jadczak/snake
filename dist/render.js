import { boardElement } from "./main.js";
export const render = (gameInfo) => {
    renderBoard(gameInfo.boardSize);
};
const renderBoard = (size) => {
    boardElement.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const element = document.createElement("div");
            element.classList.add("square");
            boardElement.appendChild(element);
        }
    }
};
