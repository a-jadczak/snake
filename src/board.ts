import { BoardSquare } from "./boardSquare/boardSquare";
import { SquareState } from "./boardSquare/squareState";
import { Color } from "./Color/Color";

export class Board
{
    size: number; // boardSize * boardSize
    speed : number;
    boardColor: string;
    
    // Key is string becauase objects can't be used as key in Map. 
    // So simplest way is to set key as a parsed object
    boardMap : Map<string, BoardSquare> = new Map<string, BoardSquare>();

    getSquare(position : string) : BoardSquare
    {        
        return this.boardMap.get(position);
    }

    getSquareState(position : string) : SquareState
    {
        return this.boardMap.get(position).squareState;
    }

    setSquareState(position : string, squareState : SquareState) : void
    {
        this.boardMap.get(position).squareState = squareState;
    }

    paintSquare(position : string, color : Color) : void
    {
        this.getSquare(position).htmlElement.style.backgroundColor = color;
    }
}
