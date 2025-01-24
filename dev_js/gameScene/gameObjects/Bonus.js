import { Sprite } from "pixi.js"
import { sprites } from "../../engine/loader"
import { BOOST, BOOSTS, BOOST_RADIUS } from "../../constants"
import { tickerAdd, tickerRemove } from "../../engine/application"
import { useBoost, addScore, checkLevelClear } from '../../engine/events'

class Bonus extends Sprite {
    constructor(x, y, type, platform, isCollected = false) {
        super(
            type === BOOSTS.acceleration || type === BOOSTS.shrink || type === BOOSTS.stop
            ? sprites.boost_neg.textures[type]
            : sprites.boost_pos.textures[type]
        )
        this.anchor.set(0.5)
        this.position.set(x, y)
        // this.alpha = 0.75

        this.platform = platform

        this.isScaleUp = false // scale for rotation illusion (increase/decrease)
        this.isCollected = isCollected
        this.speed = BOOST.speed
        this.type = type

        tickerAdd(this)
    }

    tick(time) {
        if (this.isCollected) {
            this.position.y -= time.elapsedMS
            const scaleAdd = time.elapsedMS * BOOST.scaleRate
            this.scale.x += scaleAdd
            this.scale.y += scaleAdd
            this.alpha -= scaleAdd
            if (this.alpha < 0.1) return this.kill()
            else return
        }

        this.position.y += this.speed * time.elapsedMS
        this.speed += BOOST.acc

        if (this.isScaleUp) {
            this.scale.x += time.elapsedMS * BOOST.scaleRate 
            if (this.scale.x > 1) {
                this.scale.x = 1
                this.isScaleUp = false
            }
        } else {
            this.scale.x -= time.elapsedMS * BOOST.scaleRate 
            if (this.scale.x < 0.1) {
                this.scale.x = 0.1
                this.isScaleUp = true
            }
        }

        if (this.position.y - BOOST_RADIUS > this.platform.y) return this.kill()

        if (this.position.x > this.platform.bonusLeft
        && this.position.x < this.platform.bonusRight
        && this.position.y > this.platform.bonusTop) {
            useBoost(this.type)
            addScore({score: 10, x: this.position.x, y: this.position.y})
            this.isCollected = true
            this.scale.x = 1
        }
    }

    kill() {
        tickerRemove(this)
        this.parent.removeChild(this)
        checkLevelClear()
        this.destroy()
    }
}

export default Bonus