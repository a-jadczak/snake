import { BoardSquare } from "./boardSquare/boardSquare.js";
import { SquareState } from "./boardSquare/squareState.js";
import { openPopup } from "./handleUI.js";
import { interval } from "./main.js";
import { getRandom } from "./Math/random.js";
import Vector2 from "./Math/vector2.js";
import GameSettings from "./types/gameSettings.js";

export class Board
{
    size: number; // boardSize * boardSize
    speed : number;
    boardColor: string;
    
    // Key is string becauase objects can't be used as key in Map. 
    // So simplest way is to set key as a parsed object
    boardMap : Map<string, BoardSquare> = new Map<string, BoardSquare>();

    public applySettings(gameSettings: GameSettings)
    {
        this.size = gameSettings.boardSize;
    }

    public getSquare(position : string) : BoardSquare
    {        
        return this.boardMap.get(position);
    }

    public getSquareState(position : string) : SquareState
    {
        return this.getSquare(position).squareState;
    }

    public setSquareState(position : string, squareState : SquareState) : void
    {
        this.getSquare(position).squareState = squareState;
    }

    public paintSquare(position : string, color : string) : void
    {
        this.getSquare(position).htmlElement.style.backgroundColor = color;
    }

    // Returns a random position where there is an empty square. Used for generating obstacles.
    public getRandomEmptySquare() : Vector2
    {
        // looping through array to add 
        let emptyPositionMap : Vector2[] = [];
        this.boardMap.forEach(e => {
            if (e.squareState == "empty")
                emptyPositionMap.push(e.vector2);
        });

        // random index from range of array with empty squares
        let randomIndex: number = getRandom(emptyPositionMap.length);
        
        // random position
        let randomEmptyPosition: Vector2 = emptyPositionMap[randomIndex];
        
        // clearing array
        emptyPositionMap = [];

        return randomEmptyPosition;
    }
    
    public handleGameOver = () =>
    {
        openPopup("YOU LOST");
        clearInterval(interval);
    }
}
