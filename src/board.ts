import { BoardSquare } from "./boardSquare/boardSquare";

export class Board
{
    size: number; // boardSize * boardSize
    speed : number;
    boardColor: string;

    board = new Map<BoardSquare, HTMLElement>(); // FIXME: Maps can only be accessed by reference type find a way to place it as a copy type
}