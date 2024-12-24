import { Sprite } from "pixi.js";
import { sprites } from "../engine/loader";
import { CONST } from "..constants/"
import { tickerAdd } from "../engine/application";

class Bullet extends Sprite {
    constructor(x, y, dx, dy) {
        super(sprites.bullet)
        this.anchor.set(0.5)
        this.position.set(x, y)
        this.dx = dx
        this.dy = dy
        this.speed = CONST.bulletSpeed

        tickerAdd(this)
    }

    tick(time) {
        
    }
}

export default Bullet