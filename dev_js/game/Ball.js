import { Sprite } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"
import { sprites } from "../engine/loader"
import { CONST } from "../constants"

class Ball extends Sprite {
    constructor(platformY, maxX, maxY, bricks, platform) {
        super(sprites.platform.textures.ball)
        this.anchor.set(0.5)
        this.position.set(maxX * 0.5, platformY - CONST.ceilSize)

        this.minX = CONST.halfCeilSize
        this.minY = CONST.halfCeilSize
        this.maxX = maxX - CONST.halfCeilSize
        this.maxY = maxY - CONST.halfCeilSize

        this.bricks = bricks
        this.platform = platform

        this.speed = CONST.ball.startSpeed
        this.acc = CONST.ball.accRate

        // rotation is in radians, angle is in degrees
        // 0 - to Right side, -90 to Top
        this.direction = -Math.PI * 0.75 + Math.random() * Math.PI * 0.5
        this.dx = Math.cos(this.direction)
        this.dy = Math.sin(this.direction)
        
        tickerAdd(this)
    }

    getBounceX(x) {
        // отражение по оси X
        this.dx *= -1
        this.speed *= this.acc
        if (this.speed > CONST.ball.maxSpeed) this.speed = CONST.ball.maxSpeed
        this.position.x = x
    }

    getBounceY(y) {
        // отражение по оси Y
        this.dy *= -1
        this.speed *= this.acc
        if (this.speed > CONST.ball.maxSpeed) this.speed = CONST.ball.maxSpeed
        this.position.y = y
    }

    move() {
        if (this.path < CONST.halfCeilSize) {
            this.position.x += this.dx * this.path
            this.position.y += this.dy * this.path
            this.path = 0
        } else {
            this.position.x += this.dx * CONST.halfCeilSize
            this.position.y += this.dy * CONST.halfCeilSize
            this.path -= CONST.halfCeilSize
        }

        let collidedBrick = null
        this.bricks.forEach( brick => {
            if (collidedBrick) return

            if (this.position.x > brick.left && this.position.x < brick.right
            && this.position.y > brick.top && this.position.y < brick.bottom) {
                collidedBrick = brick
                brick.getHit()
            }
        })

        if (collidedBrick) {
            const fromLeft = this.position.x - collidedBrick.left
            const fromRight = collidedBrick.right - this.position.x
            const fromTop = this.position.y - collidedBrick.top
            const fromBottom = collidedBrick.bottom - this.position.y

            const minOverlap = Math.min( fromLeft, fromRight, fromTop, fromBottom )

            if (minOverlap === fromLeft) this.getBounceX( collidedBrick.left )
            else if (minOverlap === fromRight) this.getBounceX( collidedBrick.right )
            else if (minOverlap === fromTop) this.getBounceY( collidedBrick.top )
            else this.getBounceY( collidedBrick.bottom )

            return
        }

        if (this.y < this.minY) return this.getBounceY( this.minY )
        if (this.x < this.minX) return this.getBounceX( this.minX )
        if (this.x > this.maxX) return this.getBounceX( this.maxX )

        if (this.y > this.maxY) {
            if (this.parent.parent.protect.isActive) return this.getBounceY( this.maxY )
            else return this.kill()
        }

        if ( this.y > this.platform.top && this.x > this.platform.left && this.x < this.platform.right ) {
            // отбитие мяча
            this.getBounceY(this.platform.top)

            // определяем смещения точки столкновения от центра платформы
            const offset = this.position.x - this.platform.position.x
            const offsetRate = (offset / this.platform.width) * 0.75
            // 0 - center; -0.55 - left side end; 0.55 - right side end
            // use offsetRate * 0.75 to minimize offset (-0.42...0.42)
            // dx > 0 - ball move to right; dx < 0 - ball move to left

            // находим изменение dx
            const newDx = this.dx += offsetRate
            // Находим коэффициент изменения
            const ratio = newDx / this.dx
            // Рассчитываем новое значение dy
            this.dy *= ratio
            this.dx = newDx 
        }
    }

    tick(time) {
        this.path = this.speed * time.elapsedMS
        // console.log( Math.ceil(this.path / CONST.halfCeilSize) )
        // console.log( 'this.speed', this.speed )
        while(this.path) this.move()
    }

    kill() {
        this.path = 0
        tickerRemove(this)
        this.destroy()
    }

    accelerate() {
        this.speed *= this.acc * 2
        if (this.speed > CONST.ball.maxSpeed) this.speed = CONST.ball.maxSpeed
    }

    slowdown() {
        this.speed = 0.5
    }
}

export default Ball