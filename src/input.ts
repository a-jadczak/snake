import { BoardSquare } from "./boardSquare/boardSquare.js";

const directions: Map<string, BoardSquare> = new Map([
    ["left", BoardSquare.LEFT],
    ["right", BoardSquare.RIGHT],
    ["up", BoardSquare.UP],
    ["down", BoardSquare.DOWN],
]);
// TODO: Avoid pressing a backward key
const getPlayerDirection = (key) : BoardSquare => 
{
    switch (key) 
    {
        case "a":
        case "ArrowLeft":
            return directions.get("left");
        case "w":
        case "ArrowUp":
            return directions.get("up");
        case "s":
        case "ArrowDown":
            return directions.get("down");
        case "d":
        case "ArrowRight":
            return directions.get("right");
        default:
            return null;
    }
}


export default getPlayerDirection;