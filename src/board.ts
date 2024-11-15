import { BoardSquare } from "./boardSquare/boardSquare";

export class Board
{
    size: number; // boardSize * boardSize
    speed : number;
    boardColor: string;
    
    // Key is string becauase objects can't be used as key in Map. 
    // So simplest way is to set key as a parsed object
    boardMap : Map<string, BoardSquare> = new Map<string, BoardSquare>();

    getSquare(position : string)
    {
        return this.boardMap.get(position);
    }
}
