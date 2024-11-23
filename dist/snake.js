import Vector2 from "./vector2.js";
export class Snake {
    //#endregion
    constructor(startPosition, snakeColor) {
        //START_POSITON : BoardSquare;
        this.currentDirection = Vector2.LEFT;
        // Every snake's square element position
        this.snakePositions = [
            new Vector2(5, 5),
            new Vector2(6, 5),
            new Vector2(7, 5),
            new Vector2(8, 5),
            new Vector2(9, 5),
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
        let copy = new Vector2(this.snakePositions[0].x, this.snakePositions[0].y);
        copy.x += this.currentDirection.x;
        copy.y += this.currentDirection.y;
        this.previousTailPosition = this.getLastPosition();
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
        return this.previousTailPosition;
    }
    getLastPosition() {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
