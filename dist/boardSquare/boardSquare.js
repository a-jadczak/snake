export class BoardSquare {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
//Static properties for shorthand
BoardSquare.DOWN = new BoardSquare(0, -1);
BoardSquare.UP = new BoardSquare(0, 1);
BoardSquare.RIGHT = new BoardSquare(1, 0);
BoardSquare.LEFT = new BoardSquare(-1, 0);
BoardSquare.ONE = new BoardSquare(1, 1);
BoardSquare.ZERO = new BoardSquare(0, 0);
