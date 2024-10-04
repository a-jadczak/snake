import { Vector2 } from "./Vector/vector2.js";
import { Color } from "./Color/Color.js"

//    1
// -1   1
//   -1

export class Snake
{
    START_POSITON : Vector2;
    START_DIRECTION = Vector2.RIGHT;

    snakePositions : Vector2[] = [Vector2.UP];
    snakeDirection : Vector2 = this.START_DIRECTION; 

    //#region VISUAL
    SNAKE_COLOR : string;

    //#endregion

    constructor ( {startPosition, snakeColor} : {startPosition : Vector2, snakeColor : Color} )
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

    changeDirection(newDirection : Vector2)
    {
        this.snakeDirection = newDirection;
    }


    getFirstPosition() : Vector2
    {
        return this.snakePositions[0];
    }

    getLastPosition() : Vector2
    {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
