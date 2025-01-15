import Obstacle from "Obstacle.js";
class Fruit extends Obstacle {
    constructor(vector2, img) {
        super(vector2);
        this.img = img;
    }
}
export default Fruit;
