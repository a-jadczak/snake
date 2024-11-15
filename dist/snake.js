import { BoardSquare } from "./boardSquare/boardSquare.js";
//    1
// -1   1
//   -1
export class Snake {
    //#endregion
    constructor(startPosition, snakeColor) {
        this.START_DIRECTION = BoardSquare.RIGHT;
        // Every snake's square element position
        this.snakePositions = [BoardSquare.UP];
        this.snakeDirection = this.START_DIRECTION;
        this.START_POSITON = startPosition;
        this.SNAKE_COLOR = snakeColor;
    }
    move() {
    }
    eat() {
    }
    grow() {
        let lastPos = this.getLastPosition();
    }
    changeDirection(newDirection) {
        this.snakeDirection = newDirection;
    }
    getFirstPosition() {
        return this.snakePositions[0];
    }
    // getNextPosition() : BoardSquare
    // {
    // }
    getLastPosition() {
        return this.snakePositions[this.snakePositions.length - 1];
    }
}
