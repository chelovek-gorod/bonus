import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { CEIL_HALF_SIZE, BALL_RADIUS } from "../constants"

class Platform extends Sprite {
    constructor(y, size, areaWidth) {
        super(sprites.platforms.textures[size])

        this.size = size
        this.areaWidth= areaWidth

        this.anchor.set(0.5)
        this.position.set(areaWidth * 0.5, y)

        this.halfWidth = size * CEIL_HALF_SIZE
        this.halfBoundsWidth = this.halfWidth + BALL_RADIUS
        this.updateBounds()

        this.maxX = this.areaWidth - this.halfWidth

        this.isActive = false

        this.moveScale = 0
        this.moveOffset = 0
    }

    resize( isAdd ) {
        if (isAdd && this.size === 11) return
        if (!isAdd && this.size === 2) return

        this.size += isAdd ? 1 : -1

        this.halfWidth = this.size * CEIL_HALF_SIZE
        this.halfBoundsWidth = this.halfWidth + BALL_RADIUS
        this.updateBounds()

        this.maxX = this.areaWidth - this.halfWidth

        if (this.position.x < this.halfWidth) this.position.x = this.halfWidth
        else if (this.position.x > this.maxX) this.position.x = this.maxX

        this.texture = sprites.platforms.textures[this.size]
    }

    updateBounds() {
        this.left = this.position.x - this.halfWidth - BALL_RADIUS
        this.right = this.position.x + this.halfWidth + BALL_RADIUS
        this.top = this.position.y - BALL_RADIUS
        this.bottom = this.position.y + BALL_RADIUS
    }

    move(data) {
        if (this.isActive === false) return

        const pointX = (data.globalX - this.moveOffset) / this.moveScale

        if (pointX < this.halfWidth) this.position.x = this.halfWidth
        else if (pointX > this.maxX) this.position.x = this.maxX
        else this.position.x = pointX

        this.updateBounds()
    }
}

export default Platform