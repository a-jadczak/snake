//   -1
// -1 0 1
//    1
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${this.x}${this.y}`;
    }
}
//Static properties for shorthand
Vector2.DOWN = new Vector2(0, 1);
Vector2.UP = new Vector2(0, -1);
Vector2.RIGHT = new Vector2(1, 0);
Vector2.LEFT = new Vector2(-1, 0);
Vector2.ONE = new Vector2(1, 1);
Vector2.ZERO = new Vector2(0, 0);
export default Vector2;
