import { AnimatedSprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { CONST } from "../constants"
import Bonus from "./Bonus"

class AnimatedBlock extends AnimatedSprite {
    constructor(x, y, type) {
        super(sprites.bricks.animations[type === '?@' ? 'bonus' : 'fire' ])
        this.anchor.set(0.5)
        this.position.set(x, y)

        this.type = type

        this.left = this.position.x - CONST.ceilSize - CONST.halfCeilSize
        this.right = this.position.x + CONST.ceilSize + CONST.halfCeilSize
        this.top = this.position.y - CONST.ceilSize
        this.bottom = this.position.y + CONST.ceilSize

        if (type === '!*') this.play()
        else this.gotoAndPlay( Math.floor( Math.random() * this.textures.length ) )
    }

    getHit() {
        if (this.type === '?@') {
            //size_add, size_sub, stop, speed_ball, slow_ball, protection, life, bullets, balls, power
            const types = ["size_add", "slow_ball", "protection", "life", "bullets", "balls", "power"]
            const type = types[ Math.floor( Math.random() * types.length ) ]
            this.parent.parent.addChild( new Bonus(this.position.x, this.position.y, type) )
        } else {
            const types = ["size_sub", "stop", "speed_ball"]
            const type = types[ Math.floor( Math.random() * types.length ) ]
            this.parent.parent.addChild( new Bonus(this.position.x, this.position.y, type) )
        }
        this.parent.removeChild(this)
        this.destroy()
    }
}

export default AnimatedBlock