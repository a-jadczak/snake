export class Board {
    constructor() {
        // Key is string becauase objects can't be used as key in Map. 
        // So simplest way is to set key as a parsed object
        this.boardMap = new Map();
    }
    getSquare(position) {
        console.log(this.boardMap);
        return this.boardMap.get(position);
    }
    getSquareState(position) {
        return this.boardMap.get(position).squareState;
    }
    tempClear() {
        this.boardMap.forEach(e => e.htmlElement.style.backgroundColor = "red");
    }
    drawSquare(position, color) {
        this.getSquare(position).htmlElement.style.backgroundColor = color;
    }
}
