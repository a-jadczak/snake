import Vector2 from "../Math/vector2.js";
import Obstacle from "Obstacle.js"

class Fruit extends Obstacle
{
    img: string

    constructor(vector2: Vector2, img: string) 
    {
        super(vector2);
        this.img = img;
    }
}

export default Fruit;