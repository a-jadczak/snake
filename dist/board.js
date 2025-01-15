import { getRandom } from "./Math/random.js";
export class Board {
    constructor() {
        // Key is string becauase objects can't be used as key in Map. 
        // So simplest way is to set key as a parsed object
        this.boardMap = new Map();
        this.handleGameOver = () => {
            // Game over
            alert("Game over");
            document.location = "";
        };
    }
    getSquare(position) {
        return this.boardMap.get(position);
    }
    getSquareState(position) {
        return this.getSquare(position).squareState;
    }
    setSquareState(position, squareState) {
        this.getSquare(position).squareState = squareState;
    }
    paintSquare(position, color) {
        this.getSquare(position).htmlElement.style.backgroundColor = color;
    }
    // TODO: Test if works
    // Returns a random position where there is an empty square. Used for generating obstacles.
    getRandomEmptySquare() {
        // looping through array to add 
        let emptyPositionMap = [];
        this.boardMap.forEach(e => {
            if (e.squareState == "empty")
                emptyPositionMap.push(e.vector2);
        });
        // random index from range of array with empty squares
        let randomIndex = getRandom(emptyPositionMap.length);
        // random position
        let randomEmptyPosition = emptyPositionMap[randomIndex];
        // clearing array
        emptyPositionMap = [];
        return randomEmptyPosition;
    }
}
