import { Board } from "./board";
import { openPopup } from "./handleUI.js";
import { interval } from "./main.js";

export const checkWin = (score: number, board: Board) =>
{
    const requireScore = (board.size*board.size) - 1;
    if (score == requireScore)
    {
        clearInterval(interval);
        openPopup("YOU WON");
    }
}

