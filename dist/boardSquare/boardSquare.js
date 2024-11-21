export class BoardSquare {
    constructor(x, y, htmlElement) {
        this.squareState = 'empty'; //empty by default
        this.x = x;
        this.y = y;
        this.htmlElement = htmlElement;
        if (htmlElement === undefined)
            return;
        // Apply unique id based on square count
        this.id = BoardSquare.squareCounter;
        BoardSquare.squareCounter++;
    }
    // // Returns new BoardSquare object with summed up x and y values
    // static add(b1 : BoardSquare, b2 : BoardSquare) : BoardSquare
    // {
    //     return new BoardSquare(
    //         b1.x + b2.x, 
    //         b1.y + b2.y, 
    //         b1.htmlElement);
    // }
    toString() {
        return `${this.x}${this.y}`;
    }
}
BoardSquare.squareCounter = 0;
//Static properties for shorthand
BoardSquare.DOWN = new BoardSquare(0, 1, undefined);
BoardSquare.UP = new BoardSquare(0, -1, undefined);
BoardSquare.RIGHT = new BoardSquare(1, 0, undefined);
BoardSquare.LEFT = new BoardSquare(-1, 0, undefined);
BoardSquare.ONE = new BoardSquare(1, 1, undefined);
BoardSquare.ZERO = new BoardSquare(0, 0, undefined);
