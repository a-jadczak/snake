import { Board } from "./board";
import { SquareState } from "./boardSquare/squareState";
import Vector2 from "./Math/vector2";

export type BoardFunction = (board: Board) => void;
export type HTMLElement2D = {element: HTMLElement, position: Vector2, state: SquareState}