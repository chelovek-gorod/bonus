import { Sprite } from "pixi.js"
import { sprites } from "../../engine/loader"
import { CEIL_SIZE, CEIL_HALF_SIZE, BALL_RADIUS } from "../../constants"

class Brick extends Sprite {
    constructor(x, y, type) {
        super(sprites.bricks.textures[type])
        this.anchor.set(0.5)
        this.position.set(x, y)

        this.borderLeft = this.position.x - CEIL_SIZE
        this.borderRight = this.position.x + CEIL_SIZE
        this.borderTop = this.position.y - CEIL_HALF_SIZE
        this.borderBottom = this.position.y + CEIL_HALF_SIZE

        this.left = this.borderLeft - BALL_RADIUS
        this.right = this.borderRight + BALL_RADIUS
        this.top = this.borderTop - BALL_RADIUS
        this.bottom = this.borderBottom + BALL_RADIUS

        this.isVisible = type === '0' ? false : true
        if (type === 'x') this.hp = Infinity
        else if (type === '0') this.hp = 1
        else this.hp = +type
    }

    getHit(power = null) {
        if (!isFinite(this.hp)) return

        if (!this.isVisible) {
            this.isVisible = true
            this.texture = sprites.bricks.textures['t']
            return
        }

        this.hp -= power ? power : this.parent.parent.ballPower
        if (this.hp < 1) return this.broke()

        this.texture = sprites.bricks.textures[this.hp]
    }

    broke() {
        this.parent.removeChild(this)
        this.destroy()
    }
}

export default Brick