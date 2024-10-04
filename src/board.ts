import { Vector2 } from "./Vector/vector2";

export class Board
{
    size: number; // boardSize * boardSize
    speed : number;
    boardColor: string;

    board = new Map<Vector2, HTMLElement>(); // FIXME: Maps can only be accessed by reference type find a way to place it as a copy type
}