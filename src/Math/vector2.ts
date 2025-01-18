//   -1
// -1 0 1
//    1


class Vector2
{
    x: number;
    y: number;

    constructor (x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    toString()
    {
        return `${this.x}-${this.y}`
    }

    //Static properties for shorthand
    static DOWN  = new Vector2( 0,  1);
    static UP    = new Vector2( 0, -1);
    static RIGHT = new Vector2( 1,  0);
    static LEFT  = new Vector2(-1,  0);
    static ONE   = new Vector2( 1,  1);
    static ZERO  = new Vector2( 0,  0);
}

export default Vector2;