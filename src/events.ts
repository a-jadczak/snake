import { Board } from "./board";

export const checkWin = (score: number, board: Board) =>
{
    if (score == (board.size*board.size) - 1)
    {
        console.log("won");
    }
}