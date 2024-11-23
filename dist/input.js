import Vector2 from "./vector2.js";
let blockedDirection = ["d", "ArrowRight"];
// Blocks backwards direction
const setBlockedDirection = (newValue) => {
    blockedDirection = newValue;
};
const getPlayerDirection = (key) => {
    // @ts-ignore
    if (blockedDirection.includes(key))
        return null;
    switch (key) {
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
};
export default getPlayerDirection;
