import { BoardSquare } from "./boardSquare/boardSquare.js";
//   -1
// -1 0 1
//    1
export class Snake {
    //#endregion
    constructor(startPosition, snakeColor) {
        //START_POSITON : BoardSquare;
        this.currentDirection = BoardSquare.LEFT;
        // Every snake's square element position
        this.snakePositions = [
            new BoardSquare(5, 5, undefined),
            new BoardSquare(6, 5, undefined),
            new BoardSquare(7, 5, undefined),
            new BoardSquare(8, 5, undefined),
            new BoardSquare(9, 5, undefined),
        ];
        //this.START_POSITON = startPosition;
        this.SNAKE_COLOR = snakeColor;
        //this.snakePositions.push(startPosition);
    }
    grow() {
        let lastPos = this.getLastPosition();
    }
    updatePositions() {
        /*
            direction = 1 0
            5,3 += 1 0
        */
        let copy = new BoardSquare(this.snakePositions[0].x, this.snakePositions[0].y, undefined);
        copy.x += this.currentDirection.x;
        copy.y += this.currentDirection.y;
        const newArr = this.shiftArray(this.snakePositions, copy);
        this.snakePositions = newArr;
    }
    shiftArray(array, newValue) {
        return [newValue, ...array.slice(0, -1)];
    }
    move(board) {
        this.updatePositions();
    }
    eat() {
    }
    checkCollision() {
        // if pos.squareState !== empty
        // or 
        // pos === undefinded
    }
    setDirection(newDirection) {
        if (newDirection == null)
            return;
        this.currentDirection = newDirection;
    }
    getFirstPosition() {
        return this.snakePositions[0];
    }
    // Returns a previous position of the snake's tail
    getPreviousTailPosition() {
        return null;
    }
    // getNextPosition() : BoardSquare
    // {
    // }
    getLastPosition() {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
