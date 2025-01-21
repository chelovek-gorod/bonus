import { AnimatedSprite } from "pixi.js"
import { sprites } from "../../engine/loader"
import { CEIL_SIZE } from "../../constants"

class Explosion extends AnimatedSprite {
    constructor(x, y) {
        super(sprites.explosion.animations.go)
        this.anchor.set(0.5)
        this.position.set(x, y)
        
        this.points = [
            // left
            {x: x - CEIL_SIZE * 2, y: y},
            {x: x - CEIL_SIZE * 2, y: y - CEIL_SIZE},
            {x: x - CEIL_SIZE * 2, y: y + CEIL_SIZE},
            // right
            {x: x + CEIL_SIZE * 2, y: y},
            {x: x + CEIL_SIZE * 2, y: y - CEIL_SIZE},
            {x: x + CEIL_SIZE * 2, y: y + CEIL_SIZE},
            // top
            {x: x - CEIL_SIZE, y: y - CEIL_SIZE},
            {x: x, y: y - CEIL_SIZE},
            {x: x + CEIL_SIZE, y: y - CEIL_SIZE},
            // bottom
            {x: x - CEIL_SIZE, y: y + CEIL_SIZE},
            {x: x, y: y + CEIL_SIZE},
            {x: x + CEIL_SIZE, y: y + CEIL_SIZE},
        ]

        this.loop = false
        this.play()
        this.onComplete = () => this.destroy()
        setTimeout( () => this.kill(), 120 )
    }

    kill() {
        this.points.forEach( point => {
            let brickIndex = 0
            const bricks = this.parent.bricks.children
            while (brickIndex < bricks.length) {
                if (bricks[brickIndex].position.x === point.x && bricks[brickIndex].position.y === point.y) {
                    bricks[brickIndex].getHit(Infinity)
                    brickIndex = bricks.length
                } else {
                    brickIndex++
                }
            }
        })
    }
}

export default Explosion