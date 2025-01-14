import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { BONUS } from "../constants"
import { tickerAdd, tickerRemove } from "../engine/application"

class Bonus extends Sprite {
    constructor(x, y, type, platform) {
        super(
            type === 'acceleration' || type === 'resize' || type === 'stop'
            ? sprites.bonuses_neg.textures[type]
            : sprites.bonuses_pos.textures[type]
        )
        this.anchor.set(0.5)
        this.position.set(x, y)
        // this.alpha = 0.75

        this.platform = platform

        this.isScaleUp = false
        this.isCollected = false
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

        if (this.position.y > this.platform.bottom) return this.kill()

        if (this.position.x > this.platform.left - BONUS.platformOffset 
        && this.position.x < this.platform.right + BONUS.platformOffset
        && this.position.y > this.platform.top - BONUS.platformOffset
        && this.position.y < this.platform.bottom + BONUS.platformOffset) {
            switch (this.type) {
                // positive
                case "add_ball" : this.parent.parent.addBall(1); break;
                case "add_platform_size" :  this.platform.resize( true ); break;
                case "extra_balls" : this.parent.parent.addBall(3); break;
                case "power" : this.parent.parent.ballPower++; break;
                case "protection" : this.parent.parent.sidePoints.children.forEach( p => p.protect() ); break;
                case "shuts" : this.parent.parent.sidePoints.children.forEach( p => p.startShut() ); break;
                case "slow" : this.parent.parent.balls.children.forEach(b => b.slowdown()); break;
                // negative
                case "resize" :  this.platform.resize( false ); break;
                case "stop" :  this.platform.isActive = false; setTimeout(()=>this.platform.isActive = true,12000); break;
                case "acceleration" : this.parent.parent.balls.children.forEach(b => b.accelerate()); break;
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