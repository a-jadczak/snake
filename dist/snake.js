import { checkWin } from "./events.js";
import Vector2 from "./Math/vector2.js";
import { lastRenderedFruit, renderFruit, unrender } from "./render.js";
export class Snake {
    //#endregion
    constructor(startPosition, snakeColor) {
        this.snakeSquareStateBehaviours = new Map([
            ["empty", (board) => { }],
            ["snake", function (board) { board.handleGameOver(); }],
            ["fruit", function (board) { this.eat(board); }.bind(this)]
        ]);
        //START_POSITON : BoardSquare;
        this.currentDirection = Vector2.LEFT;
        // Every snake's square element position
        this.snakePositions = [];
        //this.START_POSITON = startPosition;
        this.SNAKE_COLOR = snakeColor;
        this.snakePositions.push(startPosition);
        this.score = 0;
    }
    grow() {
        let lastPos = this.getLastPosition();
        this.snakePositions.push(lastPos);
        this.score++;
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
    eat(board) {
        if (lastRenderedFruit != undefined) {
            unrender(board, lastRenderedFruit);
        }
        this.grow();
        renderFruit(board);
        checkWin(this.score, board);
    }
    checkCollision(board) {
        var _a;
        // try catch because sometimes method try to refer to unexisting index in array (out of board position)
        let nextSquareState;
        try {
            nextSquareState = board.getSquareState(this.getNextPosition().toString());
        }
        catch (exception) {
            board.handleGameOver();
        }
        // this syntax just invoke function and sends argument ".(board);"
        (_a = this.snakeSquareStateBehaviours.get(nextSquareState)) === null || _a === void 0 ? void 0 : _a(board);
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
