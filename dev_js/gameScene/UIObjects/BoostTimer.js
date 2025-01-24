import { Container, Sprite, Text } from "pixi.js"
import { sprites } from "../../engine/loader"
import { textStyles } from '../../engine/fonts'
import { tickerAdd, tickerRemove } from "../../engine/application"
import { BOOSTS } from "../../constants"
import { turnOffStopBoost, turnOffProtectBoost, turnOffShootBoost, sidePointBlink } from "../../engine/events"

class BoostTimer extends Container {
    constructor() {
        super()

        this.type = BOOSTS.empty

        this.time = 0
        this.updateTameValue = 0

        this.image = new Sprite(sprites.boost_ui_timer.textures[this.type])
        this.addChild(this.image)

        this.timeText = new Text({text: 0, style: textStyles.boostTimer})
        this.timeText.anchor.set(0.5)
        this.timeText.position.set(96, 168)
    }

    clearTime() {
        if (this.type === BOOSTS.protect) turnOffProtectBoost()
        if (this.type === BOOSTS.shoot) turnOffShootBoost()
        if (this.type === BOOSTS.stop) turnOffStopBoost()

        this.type = BOOSTS.empty
        this.image.texture = sprites.boost_ui_timer.textures[this.type]
        this.time = 0
        this.updateTameValue = 0
        this.removeChild(this.timeText)
        tickerRemove(this)
    }

    setBoost( type, timeout ) {
        if (this.type !== BOOSTS.empty) {
            if (type === this.type) this.time += timeout
            else {
                this.time = timeout
                if (this.type === BOOSTS.protect) turnOffProtectBoost()
                if (this.type === BOOSTS.shoot) turnOffShootBoost()
                if (this.type === BOOSTS.stop) turnOffStopBoost()
            }
        } else {
            this.time = timeout
            tickerAdd(this)
        }

        this.type = type
        this.image.texture = sprites.boost_ui_timer.textures[type]

        this.updateTameValue = this.time - 100
        this.timeText.text = (this.time / 1000).toFixed(1)
        this.addChild(this.timeText)
    }

    tick(time) {
        this.time -= time.elapsedMS
        if (this.time <= 0) return this.clearTime()

        if (this.time <= this.updateTameValue) {
            this.updateTameValue - 100
            this.timeText.text = (this.time / 1000).toFixed(1)
            if (this.time < 1000) sidePointBlink()
        }
    }
}

export default BoostTimer