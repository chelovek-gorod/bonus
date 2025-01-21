import { Container, Sprite, Text } from "pixi.js"
import { sprites } from "../../engine/loader"
import { textStyles } from '../../engine/fonts'
import { BONUS_TIMEOUT } from "../../constants"
import { tickerAdd, tickerRemove } from "../../engine/application"

class BoostTimer extends Container {
    constructor() {
        super()

        this.time = 0
        this.updateTameValue = 0

        // "empty", "protect", "shuts", "stop" /* "stop_red" */
        this.image = new Sprite(sprites.bonus_ui_timer.textures.empty)
        this.addChild(this.image)

        this.timeText = new Text({text: 0, style: textStyles.boostTimer})
        this.timeText.anchor.set(0.5)
        this.timeText.position.set(96, 168)
    }

    clearTime() {
        this.time = 0
        this.updateTameValue = 0
        this.removeChild(this.timeText.text)
        tickerRemove(this)
    }

    setBoost( type ) {
        this.image.texture = sprites.bonus_ui_timer.textures[type]
        this.time = BONUS_TIMEOUT
        this.updateTameValue = this.time - 100
        this.timeText.text = (this.time / 1000).toFixed(1)
        this.addChild(this.timeText.text)
        tickerAdd(this)
    }

    addTime() {
        this.time += BONUS_TIMEOUT
    }

    tick(time) {
        this.time -= time.elapsedMS
        if (this.time <= 0) return this.clearTime()

        if (this.time <= this.updateTameValue) {
            this.updateTameValue - 100
            this.timeText.text = (this.time / 1000).toFixed(1)
        }
    }
}

export default BoostTimer