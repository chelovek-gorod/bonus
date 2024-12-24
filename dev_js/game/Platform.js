import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'
import { CONST } from "../constants"

class Platform extends Sprite {
    constructor(y, size, levelWidth) {
        super(sprites.platform.textures['p_' + size])
        this.anchor.set(0.5)
        this.position.set(levelWidth * 0.5, y)

        this.size = size

        this.halfWidth = (this.size + 2) * CONST.halfCeilSize
        this.halfBoundsWidth = this.halfWidth + CONST.halfCeilSize
        this.updateBounds()

        this.levelWidth = levelWidth

        // set by PlayGround in screenResize event
        this.offsetX = null
        this.sceneScale = null
        this.sceneScaleRate = null
        this.minX = null
        this.maxX = null

        this.isActive = true

        EventHub.on(events.pointerMove, this.move, this)
    }

    resize( isAdd ) {
        if (isAdd && this.size === 9) return
        if (!isAdd && this.size === 0) return

        this.size += isAdd ? 1 : -1

        this.halfWidth = (this.size + 2) * CONST.halfCeilSize
        this.halfBoundsWidth = this.halfWidth + CONST.halfCeilSize
        this.updateBounds()

        this.minX = this.offsetX + this.halfWidth * this.sceneScale
        this.maxX = (this.levelWidth - this.halfWidth) * this.sceneScale + this.offsetX
        if (this.position.x < this.halfWidth) this.position.x = this.halfWidth
        else if (this.position.x + this.halfWidth > this.levelWidth) this.position.x = this.levelWidth - this.halfWidth

        this.texture = sprites.platform.textures['p_' + this.size]
    }

    frize() {
        this.isActive = false
        setTimeout( () => this.isActive = true, 3000 )
    }

    updateBounds() {
        // use real sizes + halfCeilSize, because ball is dot (point{x, y})
        this.left = this.position.x - this.halfBoundsWidth
        this.right = this.position.x + this.halfBoundsWidth
        this.top = this.position.y - CONST.ceilSize
        this.bottom = this.position.y + CONST.ceilSize
    }

    setSceneSizes(offsetX, scale) {
        this.offsetX = offsetX
        this.sceneScale = scale
        this.sceneScaleRate = 1 / scale
        this.minX = offsetX + this.halfWidth * scale
        this.maxX = (this.levelWidth - this.halfWidth) * scale + offsetX
    }

    move(data) {
        if (this.sceneScale === null || this.isActive === false) return

        if (data.globalX < this.minX) this.position.x = this.halfWidth
        else if (data.globalX > this.maxX) this.position.x = this.levelWidth - this.halfWidth
        else this.position.x = (data.globalX - this.offsetX) * this.sceneScaleRate

        this.updateBounds()
    }
}

export default Platform