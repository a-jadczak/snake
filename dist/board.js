export class Board {
    constructor() {
        // Key is string becauase objects can't be used as key in Map. 
        // So simplest way is to set key as a parsed object
        this.boardMap = new Map();
    }
    getSquare(position) {
        return this.boardMap.get(position);
    }
}
