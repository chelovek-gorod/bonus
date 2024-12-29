import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { CONST } from "../constants"

class Block extends Sprite {
    constructor(x, y, type) {
        super(sprites.bricks.textures[type])
        this.anchor.set(0.5)
        this.position.set(x, y)

        this.left = this.position.x - CONST.ceilSize - CONST.halfCeilSize
        this.right = this.position.x + CONST.ceilSize + CONST.halfCeilSize
        this.top = this.position.y - CONST.ceilSize
        this.bottom = this.position.y + CONST.ceilSize

        this.hp = +type + 1
        if (!this.hp) this.hp = Infinity
    }

    getHit() {
        if (!isFinite(this.hp)) return

        this.hp -= this.parent.parent.ballPower
        if (this.hp < 1) return this.broke()

        this.texture = sprites.bricks.textures[this.hp - 1]
    }

    broke() {
        this.parent.removeChild(this)
        this.destroy()
    }
}

export default Block