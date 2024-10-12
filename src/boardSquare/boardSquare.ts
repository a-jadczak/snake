export class BoardSquare
{
    x: number;
    y: number;

    constructor (x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }

    //Static properties for shorthand
    static DOWN = new BoardSquare(0, -1);
    static UP = new BoardSquare(0, 1);
    static RIGHT = new BoardSquare(1, 0);
    static LEFT = new BoardSquare(-1, 0);
    static ONE = new BoardSquare(1, 1);
    static ZERO = new BoardSquare(0, 0);

}