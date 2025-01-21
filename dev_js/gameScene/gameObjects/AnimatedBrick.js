import { AnimatedSprite } from "pixi.js"
import { sprites } from "../../engine/loader"
import { CEIL_SIZE, CEIL_HALF_SIZE, BALL_RADIUS } from "../../constants"
import Bonus from "./Bonus"
import Explosion from "./Explosion"

class AnimatedBrick extends AnimatedSprite {
    constructor(x, y, type) {
        super(sprites.bricks.animations[type === '?' ? 'bonus' : 'fire' ])
        this.anchor.set(0.5)
        this.position.set(x, y)

        this.animationSpeed = type === '?' ? 1 : 0.02

        this.type = type

        this.borderLeft = this.position.x - CEIL_SIZE
        this.borderRight = this.position.x + CEIL_SIZE
        this.borderTop = this.position.y - CEIL_HALF_SIZE
        this.borderBottom = this.position.y + CEIL_HALF_SIZE

        this.left = this.borderLeft - BALL_RADIUS
        this.right = this.borderRight + BALL_RADIUS
        this.top = this.borderTop - BALL_RADIUS
        this.bottom = this.borderBottom + BALL_RADIUS

        if (type === '!') this.play()
        else this.gotoAndPlay( Math.floor( Math.random() * this.textures.length ) )
    }

    getHit() {
        if (this.type === '?') {
            const types = [
                "add_ball", "add_platform_size", "extra_balls", "power", "protection", "shuts", "slow"
            ]
            const type = types[ Math.floor( Math.random() * types.length ) ]
            this.parent.parent.bonuses.addChild(
                new Bonus(this.position.x, this.position.y, type, this.parent.parent.platform)
            )
        } else {
            this.parent.parent.addChild( new Explosion(this.position.x, this.position.y) )
            const types = [
                "acceleration", "resize", "stop"
            ]
            const type = types[ Math.floor( Math.random() * types.length ) ]
            this.parent.parent.bonuses.addChild(
                new Bonus(this.position.x, this.position.y, type, this.parent.parent.platform)
            )
        }
        this.parent.removeChild(this)
        this.destroy()
    }
}

export default AnimatedBrick