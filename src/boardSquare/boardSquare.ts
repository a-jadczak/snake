import { SquareState } from "./squareState.js";
import Vector2 from "../Math/vector2.js";

export class BoardSquare
{
    static squareCounter : number = 0;

    id: number; // unique id for each square element in border
    vector2: Vector2;

    htmlElement : HTMLElement;

    squareState : SquareState = 'empty'; //empty by default
    
    constructor (vector2 : Vector2, htmlElement: HTMLElement)
    {
        this.vector2 = vector2;
        this.htmlElement = htmlElement;

        // Apply unique id based on square count
        this.id = BoardSquare.squareCounter;

        BoardSquare.squareCounter++;
    }

    public override(htmlElement: HTMLElement, squareState: SquareState)
    {
        this.htmlElement = htmlElement;
        this.squareState = squareState;
    }
}