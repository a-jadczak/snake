import { Vector2 } from "./Vector/vector2.js";

//    1
// -1   1
//   -1

export class Snake
{
    START_POSITON : Vector2;
    START_DIRECTION = Vector2.RIGHT;

    snakePositions : Vector2[] = [];
    snakeDirection : Vector2 = this.START_DIRECTION; 

    constructor ( {startPosition} : {startPosition : Vector2} )
    {
        this.START_POSITON = startPosition;
    }

    move() 
    {
        
    }

    eat()
    {

    }

    changeDirection(newDirection : Vector2)
    {
        this.snakeDirection = newDirection;
    }
}
