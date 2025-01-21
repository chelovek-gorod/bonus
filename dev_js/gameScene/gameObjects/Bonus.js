import { Sprite } from "pixi.js"
import { sprites } from "../../engine/loader"
import { BONUS, BONUS_RADIUS } from "../../constants"
import { tickerAdd, tickerRemove } from "../../engine/application"
import { collectBall, collectExtraBalls, collectBoost } from '../../engine/events'

class Bonus extends Sprite {
    constructor(x, y, type, platform, isCollected = false) {
        super(
            type === 'acceleration' || type === 'resize' || type === 'stop'
            ? sprites.bonuses_neg.textures[type]
            : sprites.bonuses_pos.textures[type]
        )
        this.anchor.set(0.5)
        this.position.set(x, y)
        // this.alpha = 0.75

        this.platform = platform

        this.isScaleUp = false // scale for rotation illusion (increase/decrease)
        this.isCollected = isCollected
        this.speed = BONUS.speed
        this.type = type

        tickerAdd(this)
    }

    tick(time) {
        if (this.isCollected) {
            this.position.y -= time.elapsedMS
            const scaleAdd = time.elapsedMS * BONUS.scaleRate
            this.scale.x += scaleAdd
            this.scale.y += scaleAdd
            this.alpha -= scaleAdd
            if (this.alpha < 0.1) return this.kill()
            else return
        }

        this.position.y += this.speed * time.elapsedMS
        this.speed += BONUS.acc

        if (this.isScaleUp) {
            this.scale.x += time.elapsedMS * BONUS.scaleRate 
            if (this.scale.x > 1) {
                this.scale.x = 1
                this.isScaleUp = false
            }
        } else {
            this.scale.x -= time.elapsedMS * BONUS.scaleRate 
            if (this.scale.x < 0.1) {
                this.scale.x = 0.1
                this.isScaleUp = true
            }
        }

        if (this.position.y - BONUS_RADIUS > this.platform.y) return this.kill()

        if (this.position.x > this.platform.bonusLeft
        && this.position.x < this.platform.bonusRight
        && this.position.y > this.platform.bonusTop) {
            switch (this.type) {
                // positive
                case "add_ball" : collectBall(); break;
                case "add_platform_size" : collectBoost( "add_platform_size" ); break;
                case "extra_balls" : collectExtraBalls(); break;
                case "power" : collectBoost("power"); break;
                case "protection" : collectBoost("protection"); break;
                case "shuts" : collectBoost("shuts"); break;
                case "slow" : collectBoost("slow"); break;
                // negative
                case "resize" : collectBoost("resize"); break;
                case "stop" : collectBoost("stop"); break;
                case "acceleration" : collectBoost("acceleration"); break;
                // default : this.parent.sidePoints.children.forEach( p => p.protect() ); break;
            }

            this.isCollected = true
            this.scale.x = 1
        }
    }

    kill() {
        tickerRemove(this)
        this.parent.removeChild(this)
        this.destroy()
    }
}

export default Bonus