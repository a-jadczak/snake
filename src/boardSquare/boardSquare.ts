export class BoardSquare
{
    static squareCounter : number = 0;

    id: number; // unique id for each square element in border
    x: number;
    y: number;

    htmlElement : HTMLElement | undefined;

    constructor (x : number, y : number, htmlElement: HTMLElement)
    {
        this.x = x;
        this.y = y;
        this.htmlElement = htmlElement;

        if (htmlElement === undefined)
            return;

        // Apply unique id based on square count
        this.id = BoardSquare.squareCounter;

        BoardSquare.squareCounter++;
    }

    //Static properties for shorthand
    static DOWN = new BoardSquare(0, -1, undefined);
    static UP = new BoardSquare(0, 1, undefined);
    static RIGHT = new BoardSquare(1, 0, undefined);
    static LEFT = new BoardSquare(-1, 0, undefined);
    static ONE = new BoardSquare(1, 1, undefined);
    static ZERO = new BoardSquare(0, 0, undefined);

}