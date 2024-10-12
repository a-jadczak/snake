import { BoardSquare } from "./boardSquare/boardSquare.js";
import { Color } from "./Color/Color.js"

//    1
// -1   1
//   -1

export class Snake
{
    START_POSITON : BoardSquare;
    START_DIRECTION = BoardSquare.RIGHT;

    snakePositions : BoardSquare[] = [BoardSquare.UP];
    snakeDirection : BoardSquare = this.START_DIRECTION; 

    //#region VISUAL
    SNAKE_COLOR : string;

    //#endregion

    constructor ( {startPosition, snakeColor} : {startPosition : BoardSquare, snakeColor : Color} )
    {
        this.START_POSITON = startPosition;
        this.SNAKE_COLOR = snakeColor;

    }

    move() 
    {
        
    }

    eat()
    {

    }

    grow()
    {
        let lastPos = this.getLastPosition();
    }

    changeDirection(newDirection : BoardSquare)
    {
        this.snakeDirection = newDirection;
    }


    getFirstPosition() : BoardSquare
    {
        return this.snakePositions[0];
    }

    getLastPosition() : BoardSquare
    {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
