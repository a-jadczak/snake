import { openPopup } from "./handleUI.js";
import { interval } from "./main.js";
export const checkWin = (score, board) => {
    const requireScore = (board.size * board.size) - 1;
    if (score == requireScore) {
        clearInterval(interval);
        openPopup("YOU WON");
    }
};
