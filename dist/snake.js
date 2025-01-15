import Vector2 from "./Math/vector2.js";
export class Snake {
    //#endregion
    constructor(startPosition, snakeColor) {
        //START_POSITON : BoardSquare;
        this.currentDirection = Vector2.LEFT;
        // Every snake's square element position
        this.snakePositions = [
            new Vector2(3, 5),
            new Vector2(4, 5),
            new Vector2(5, 5),
            new Vector2(6, 5),
            new Vector2(7, 5),
            new Vector2(8, 5),
        ];
        //this.START_POSITON = startPosition;
        this.SNAKE_COLOR = snakeColor;
        //this.snakePositions.push(startPosition);
    }
    grow() {
        let lastPos = this.getLastPosition();
    }
    updateSquareState(board) {
        board.setSquareState(this.previousTailPosition.toString(), "empty");
        board.setSquareState(this.nextPosition.toString(), "snake");
    }
    updatePositions() {
        /*
            direction = 1 0
            5,3 += 1 0
        */
        this.nextPosition = this.getNextPosition();
        this.previousTailPosition = this.getLastPosition();
        const newArr = this.shiftArray(this.snakePositions, this.nextPosition);
        this.snakePositions = newArr;
    }
    getNextPosition() {
        const nextPosition = new Vector2(this.snakePositions[0].x, this.snakePositions[0].y);
        nextPosition.x += this.currentDirection.x;
        nextPosition.y += this.currentDirection.y;
        return nextPosition;
    }
    shiftArray(array, newValue) {
        return [newValue, ...array.slice(0, -1)];
    }
    move(board) {
        this.checkCollision(board);
        this.updatePositions();
        this.updateSquareState(board);
    }
    eat() {
    }
    checkCollision(board) {
        // try catch because sometimes method try to refer to unexisting index in array (out of board position)
        let nextSquareState;
        try {
            nextSquareState =
                board.getSquareState(this.getNextPosition().toString());
        }
        catch (exception) {
            board.handleGameOver();
        }
        if (nextSquareState !== "empty") {
            board.handleGameOver();
        }
    }
    gameOver() {
    }
    setDirection(newDirection) {
        if (newDirection == null)
            return;
        this.currentDirection = newDirection;
    }
    getFirstPosition() {
        return this.snakePositions[0];
    }
    getLastPosition() {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
