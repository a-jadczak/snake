import { Board } from "./board.js";
import { Color } from "./Color/Color.js"
import Vector2 from "./vector2.js"

export class Snake
{
    //START_POSITON : BoardSquare;
    currentDirection : Vector2 = Vector2.LEFT;

    // Every snake's square element position
    public snakePositions : Vector2[] = [
        new Vector2(5, 5),
        new Vector2(6, 5),
        new Vector2(7, 5),
        new Vector2(8, 5),
        new Vector2(9, 5),
    ];

    // Variable containing previous last position of tail
    // it's for like cleaning boardSquare where snake last appeared instead of cleaning all boardsquares every snake move
    previousTailPosition : Vector2;

    //#region VISUAL
    SNAKE_COLOR : string;

    //#endregion

    constructor (startPosition : Vector2, snakeColor : Color)
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

        let copy: Vector2 = new Vector2(
            this.snakePositions[0].x,
            this.snakePositions[0].y,
        );
        copy.x += this.currentDirection.x;
        copy.y += this.currentDirection.y;

        this.previousTailPosition = this.getLastPosition();

        const newArr : Vector2[] = this.shiftArray(this.snakePositions, copy);
        
        this.snakePositions = newArr;
    }

    private shiftArray(array: Vector2[], newValue : Vector2) : Vector2[]
    {
        return [newValue, ...array.slice(0, -1)];
    }

    public move(board : Board) 
    {
        this.updatePositions();
    }

    public eat()
    {

    }

    private checkCollision()
    {
        // if pos.squareState !== empty
        // or 
        // pos === undefinded
    }

    public setDirection(newDirection : Vector2)
    {
        if (newDirection == null)
            return;
        
        this.currentDirection = newDirection;
    }


    public getFirstPosition() : Vector2
    {
        return this.snakePositions[0];
    }

    // Returns a previous position of the snake's tail
    public getPreviousTailPosition() : Vector2
    {
        return this.previousTailPosition;
    }

    private getLastPosition() : Vector2
    {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
