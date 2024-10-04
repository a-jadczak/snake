import { Vector2 } from "./Vector/vector2.js";
//    1
// -1   1
//   -1
export class Snake {
    constructor({ startPosition }) {
        this.START_DIRECTION = Vector2.RIGHT;
        this.snakePositions = [];
        this.snakeDirection = this.START_DIRECTION;
        this.START_POSITON = startPosition;
    }
    move() {
    }
    eat() {
    }
    changeDirection(newDirection) {
        this.snakeDirection = newDirection;
    }
}
