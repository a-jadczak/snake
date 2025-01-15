import Vector2 from "./Math/vector2.js";

let blockedDirection : string[] = ["d", "ArrowRight"];

// Blocks backwards direction
const setBlockedDirection = (newValue : string[]) =>
{
    blockedDirection = newValue;
}

const getPlayerDirection = (key : string) : Vector2 | null => 
{
    // @ts-ignore
    if (blockedDirection.includes(key))
        return null;

    switch (key) 
    {
        case "a":
        case "ArrowLeft":
            setBlockedDirection(["d", "ArrowRight"]);
            return Vector2.LEFT;
        case "w":
        case "ArrowUp":
            setBlockedDirection(["s", "ArrowDown"]);
            return Vector2.UP;
        case "s":
        case "ArrowDown":
            setBlockedDirection(["w", "ArrowUp"]);
            return Vector2.DOWN;
        case "d":
        case "ArrowRight":
            setBlockedDirection(["a", "ArrowLeft"]);
            return Vector2.RIGHT;
        default:
            return null;
    }
}

export default getPlayerDirection;