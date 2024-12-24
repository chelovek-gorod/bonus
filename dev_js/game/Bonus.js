import { Sprite } from "pixi.js"
import { sprites } from "../engine/loader"
import { CONST } from "../constants"
import { tickerAdd, tickerRemove } from "../engine/application"

const acc = 0.02
const speed = -0.5
const scaleRate = 0.002

class Bonus extends Sprite {
    constructor(x, y, type) {
        super(sprites.bonuses.textures[type])
        this.anchor.set(0.5)
        this.position.set(x, y)
        this.alpha = 0.75

        this.isScaleUp = false

        this.isCollected = false

        this.speed = speed
        this.type = type

        tickerAdd(this)
    }

    tick(time) {
        if (this.isCollected) {
            this.position.y -= time.elapsedMS
            const scaleAdd = time.elapsedMS * scaleRate
            this.scale.x += scaleAdd
            this.scale.y += scaleAdd
            this.alpha -= scaleAdd
            if (this.alpha < 0.1) return this.kill()
            else return
        }

        this.position.y += this.speed * time.elapsedMS
        this.speed += acc

        if (this.isScaleUp) {
            this.scale.x += time.elapsedMS * scaleRate 
            if (this.scale.x > 1) {
                this.scale.x = 1
                this.isScaleUp = false
            }
        } else {
            this.scale.x -= time.elapsedMS * scaleRate 
            if (this.scale.x < 0.1) {
                this.scale.x = 0.1
                this.isScaleUp = true
            }
        }

        if (this.position.y > this.parent.platform.bottom) return this.kill()

        if (this.position.x > this.parent.platform.left
        && this.position.x < this.parent.platform.right
        && this.position.y > this.parent.platform.top
        && this.position.y < this.parent.platform.bottom) {
            switch (this.type) {
                case "size_add" :  this.parent.platform.resize( true ); break;
                case "size_sub" :  this.parent.platform.resize( false ); break;
                case "stop" :  this.parent.platform.frize(); break;
                case "speed_ball" : this.parent.balls.children.forEach(b => b.accelerate()); break;
                case "slow_ball" : this.parent.balls.children.forEach(b => b.slowdown()); break;
                case "protection" : this.parent.sidePoints.children.forEach( p => p.protect() ); break;
                case "life" : this.parent.addBall(1); break;
                case "bullets" : this.parent.sidePoints.children[0].shut(); break;
                case "balls" : this.parent.addBall(3); break;
                case "power" : this.parent.ballPower++; break;
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