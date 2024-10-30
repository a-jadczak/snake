import { BoardSquare } from "./boardSquare/boardSquare";

export class Board
{
    size: number; // boardSize * boardSize
    speed : number;
    boardColor: string;

    // key - square id
    boardMap = new Map<number, BoardSquare>();
}