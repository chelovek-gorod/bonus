import { Text } from 'pixi.js'
import { textStyles } from '../../engine/fonts'
import { tickerAdd, tickerRemove } from '../../engine/application'
import { FLYING_TEXT } from '../../constants'

class FlyingText extends Text {
    constructor(x, y, text) {
        super({text: text, style: textStyles.fly})
        this.anchor.set(0.5)
        this.position.set(x, y)
        this.time = FLYING_TEXT.lifeTime
        tickerAdd(this)
    }

    tick(time) {
        this.time -= time.elapsedMS
        this.position.y -= time.elapsedMS * FLYING_TEXT.speed
        this.scale.x *= FLYING_TEXT.scaleRate
        this.scale.y = this.scale.x
        this.alpha -= time.elapsedMS * FLYING_TEXT.alphaStep

        if (this.alpha < 0) {
            tickerRemove(this)
            this.destroy()
        }
    }
}

export default FlyingText