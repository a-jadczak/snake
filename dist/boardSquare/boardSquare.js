export class BoardSquare {
    constructor(x, y, htmlElement) {
        this.x = x;
        this.y = y;
        this.htmlElement = htmlElement;
        if (htmlElement === undefined)
            return;
        // Apply unique id based on square count
        this.id = BoardSquare.squareCounter;
        BoardSquare.squareCounter++;
    }
}
BoardSquare.squareCounter = 0;
//Static properties for shorthand
BoardSquare.DOWN = new BoardSquare(0, -1, undefined);
BoardSquare.UP = new BoardSquare(0, 1, undefined);
BoardSquare.RIGHT = new BoardSquare(1, 0, undefined);
BoardSquare.LEFT = new BoardSquare(-1, 0, undefined);
BoardSquare.ONE = new BoardSquare(1, 1, undefined);
BoardSquare.ZERO = new BoardSquare(0, 0, undefined);
