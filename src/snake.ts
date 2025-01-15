import { Board } from "./board.js";
import { BoardSquare } from "./boardSquare/boardSquare.js";
import { SquareState } from "./boardSquare/squareState.js";
import { Color } from "./Color/Color.js"
import Vector2 from "./Math/vector2.js"

export class Snake
{
    //START_POSITON : BoardSquare;
    currentDirection : Vector2 = Vector2.LEFT;

    // Every snake's square element position
    public snakePositions : Vector2[] = [
        new Vector2(3, 5),
        new Vector2(4, 5),
        new Vector2(5, 5),
        new Vector2(6, 5),
        new Vector2(7, 5),
        new Vector2(8, 5),
    ];

    // Variable containing previous last position of tail
    // it's for like cleaning boardSquare where snake last appeared instead of cleaning all boardsquares every snake move
    previousTailPosition : Vector2;

    nextPosition : Vector2;

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

    private updateSquareState(board : Board)
    {
        board.setSquareState(this.previousTailPosition.toString(), "empty");
        board.setSquareState(this.nextPosition.toString(), "snake");
    }

    private updatePositions()
    {
        /*
            direction = 1 0
            5,3 += 1 0        
        */

        this.nextPosition = this.getNextPosition();
        this.previousTailPosition = this.getLastPosition();

        const newArr : Vector2[] = this.shiftArray(this.snakePositions, this.nextPosition);
        
        this.snakePositions = newArr;
    }

    private getNextPosition() : Vector2
    {        
        const nextPosition: Vector2 = new Vector2 (
            this.snakePositions[0].x,
            this.snakePositions[0].y,
        );

        nextPosition.x += this.currentDirection.x;
        nextPosition.y += this.currentDirection.y;

        return nextPosition
    }

    private shiftArray(array: Vector2[], newValue : Vector2) : Vector2[]
    {
        return [newValue, ...array.slice(0, -1)];
    }

    public move(board : Board) 
    {
        this.checkCollision(board);
        this.updatePositions();
        this.updateSquareState(board);
    }

    public eat()
    {

    }

    private checkCollision(board : Board)
    {
        // try catch because sometimes method try to refer to unexisting index in array (out of board position)
        let nextSquareState : SquareState;
        try 
        {
            nextSquareState = 
                board.getSquareState(this.getNextPosition().toString());    
        }
        catch (exception)
        {
            board.handleGameOver();
        }
        
        if (nextSquareState !== "empty")
        {
            board.handleGameOver();
        }
    }
    
    private gameOver()
    {

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

    private getLastPosition() : Vector2
    {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
