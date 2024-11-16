import { BoardSquare } from "./boardSquare/boardSquare.js";

let blockedDirection : string[] = ["d", "ArrowRight"];

// Blocks backwards direction
const setBlockedDirection = (newValue : string[]) =>
{
    blockedDirection = newValue;
}

const getPlayerDirection = (key : string) : BoardSquare | null => 
{
    // @ts-ignore
    if (blockedDirection.includes(key))
        return null;

    switch (key) 
    {
        case "a":
        case "ArrowLeft":
            setBlockedDirection(["d", "ArrowRight"]);
            return BoardSquare.LEFT;
        case "w":
        case "ArrowUp":
            setBlockedDirection(["s", "ArrowDown"]);
            return BoardSquare.UP;
        case "s":
        case "ArrowDown":
            setBlockedDirection(["w", "ArrowUp"]);
            return BoardSquare.DOWN;
        case "d":
        case "ArrowRight":
            setBlockedDirection(["a", "ArrowLeft"]);
            return BoardSquare.RIGHT;
        default:
            return null;
    }
}

export default getPlayerDirection;