import { BoardSquare } from "./boardSquare/boardSquare.js";
import { Color } from "./Color/Color.js"

//   -1
// -1 0 1
//    1

export class Snake
{
    //START_POSITON : BoardSquare;
    currentDirection = BoardSquare.LEFT;

    // Every snake's square element position
    public snakePositions : BoardSquare[] = [
        new BoardSquare(5, 5, undefined),
        new BoardSquare(6, 5, undefined),
        new BoardSquare(7, 5, undefined),
        new BoardSquare(8, 5, undefined),
        new BoardSquare(9, 5, undefined),
    ];

    //#region VISUAL
    SNAKE_COLOR : string;

    //#endregion

    constructor (startPosition : BoardSquare, snakeColor : Color)
    {
        //this.START_POSITON = startPosition;
        this.SNAKE_COLOR = snakeColor;
        //this.snakePositions.push(startPosition);
    }

    private grow()
    {
        let lastPos = this.getLastPosition();
    }

    private updatePositions()
    {
        /*
            direction = 1 0
            5,3 += 1 0        
        */

        let copy: BoardSquare = new BoardSquare(
            this.snakePositions[0].x,
            this.snakePositions[0].y,
            undefined
        );
        copy.x += this.currentDirection.x;
        copy.y += this.currentDirection.y;

        const newArr = this.shiftArray(this.snakePositions, copy);
        
        this.snakePositions = newArr;
    }

    private shiftArray(array: BoardSquare[], newValue : BoardSquare)
    {
        return [newValue, ...array.slice(0, -1)];
    }

    public move() 
    {
        this.updatePositions();
    }

    public eat()
    {

    }

    private checkCollision()
    {

    }

    public setDirection(newDirection : BoardSquare)
    {
        this.currentDirection = newDirection;
    }


    public getFirstPosition() : BoardSquare
    {
        return this.snakePositions[0];
    }

    // Returns a previous position of the snake's tail
    public getPreviousTailPosition() : BoardSquare
    {
        return null;
    }

    // getNextPosition() : BoardSquare
    // {

    // }

    public getLastPosition() : BoardSquare
    {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
