import { Sprite } from "pixi.js";
import { sprites } from "../engine/loader";
import { BULLET_SPEED } from "../constants"
import { tickerAdd, tickerRemove } from "../engine/application";
import { moveToTarget } from "../engine/functions";

class Bullet extends Sprite {
    constructor(x, y, target) {
        super(sprites.bullet)
        this.anchor.set(0.5)
        this.position.set(x, y)
        this.target = { position: {...target} }
        this.speed = BULLET_SPEED

        tickerAdd(this)
    }

    tick(time) { 
        const isOnTarget = moveToTarget(this, this.target, this.speed * time.elapsedMS)

        let collidedBrick = null
        this.parent.bricks.children.forEach( brick => {
            if (collidedBrick) return

            if (this.position.x > brick.borderLeft && this.position.x < brick.borderRight
            && this.position.y > brick.borderTop && this.position.y < brick.borderBottom) {
                collidedBrick = brick
                brick.getHit(1)
            }
        })

        if (isOnTarget || collidedBrick) this.kill()
    }

    kill() {
        tickerRemove(this)
        this.destroy()
    }
}

export default Bullet