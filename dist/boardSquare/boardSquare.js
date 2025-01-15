export class BoardSquare {
    constructor(vector2, htmlElement) {
        this.squareState = 'empty'; //empty by default
        this.vector2 = vector2;
        this.htmlElement = htmlElement;
        // Apply unique id based on square count
        this.id = BoardSquare.squareCounter;
        BoardSquare.squareCounter++;
    }
    override(htmlElement, squareState) {
        this.htmlElement = htmlElement;
        this.squareState = squareState;
    }
}
BoardSquare.squareCounter = 0;
