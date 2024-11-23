export class BoardSquare {
    constructor(vector2, htmlElement) {
        this.squareState = 'empty'; //empty by default
        this.vector2 = vector2;
        this.htmlElement = htmlElement;
        // Apply unique id based on square count
        this.id = BoardSquare.squareCounter;
        BoardSquare.squareCounter++;
    }
}
BoardSquare.squareCounter = 0;
