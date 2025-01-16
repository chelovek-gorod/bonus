import { Sprite } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"
import { sprites } from "../engine/loader"
import { CEIL_SIZE, BALL } from "../constants"
import { getLinesIntersectionPoint } from "../engine/functions"

class Ball extends Sprite {
    constructor(gameArea) {
        super(sprites.ball)
        this.anchor.set(0.5)
        this.position.set(gameArea.platform.position.x, gameArea.platform.position.y + CEIL_SIZE)

        this.minX = BALL.radius
        this.minY = BALL.radius
        this.maxX = gameArea.areaWidth - BALL.radius
        this.maxY = gameArea.areaHeight - BALL.radius

        this.platform = gameArea.platform
        this.bricks = gameArea.bricks.children

        this.speed = BALL.startSpeed
        this.acc = BALL.accRate

        // rotation is in radians, angle is in degrees
        // 0 - to Right side, -90 to Top
        //this.direction = -Math.PI * 0.75 + Math.random() * Math.PI * 0.5
        this.direction = -Math.PI * 0.5
        this.dx = Math.cos(this.direction)
        this.dy = Math.sin(this.direction)

        this.resetCollideData()
        
        tickerAdd(this)
    }

    resetCollideData() {
        this.collideX = 0
        this.collideY = 0
        this.collideDistance = Infinity
        this.collideOffsetX = 0
        this.collideOffsetY = 0
        this.collideBrickIndex = -1
        this.platformOffset = 0
    }

    setCollideData(intersectPoint, offsetX, offsetY, brickIndex) {
        const dx = this.position.x - intersectPoint.x
        const dy = this.position.y - intersectPoint.y
        const sd = Math.abs(dx * dx + dy * dy)
        if (sd < this.collideDistance) {
            this.collideDistance = sd
            this.collideX = intersectPoint.x
            this.collideY = intersectPoint.y
            this.collideOffsetX = offsetX
            this.collideOffsetY = offsetY
            this.collideBrickIndex = brickIndex
        }
    }

    checkCollision(destinationX, destinationY) {
        this.resetCollideData()
        let intersectPoint = null
        let brickIndex = -1
    
        /*
            to left  top/bttm to right
            {dx < 0} {dx = 0} {dx > 0}

            to top   lft/rght to bottom
            {dy < 0} {dy = 0} {dy > 0}
        */

        // проверка столкновения с краями
        if (this.dx > 0) {
            intersectPoint = getLinesIntersectionPoint(
                this.x, this.y, destinationX, destinationY,
                this.maxX, this.minY, this.maxX, this.maxY
            )
            if (intersectPoint) this.setCollideData(intersectPoint, -1, 0, brickIndex) 
        } else {
            intersectPoint = getLinesIntersectionPoint(
                this.x, this.y, destinationX, destinationY,
                this.minX, this.minY, this.minX, this.maxY
            )
            if (intersectPoint) this.setCollideData(intersectPoint, 1, 0, brickIndex)
        }
          
        if (this.dy > 0) {
            intersectPoint = getLinesIntersectionPoint(
                this.x, this.y, destinationX, destinationY,
                this.minX, this.maxY, this.maxX, this.maxY
            )
            if (intersectPoint) this.setCollideData(intersectPoint, 0, -1, brickIndex) 
        } else {
            intersectPoint = getLinesIntersectionPoint(
                this.x, this.y, destinationX, destinationY,
                this.minX, this.minY, this.maxX, this.minY
            )
            if (intersectPoint) this.setCollideData(intersectPoint, 0, 1, brickIndex)
        } 

        // проверка столкновения с платформой
        if (this.dy > 0) {
            intersectPoint = getLinesIntersectionPoint(
                this.x, this.y, destinationX, destinationY,
                this.platform.left, this.platform.top, this.platform.right, this.platform.top
            )
            if (intersectPoint) {
                this.setCollideData(intersectPoint, 0, -1, -2 /* brickIndex = -2 -> platform top */)
                this.platformOffset = this.position.x - this.platform.position.x
            } else {
                if (this.dx > 0) {
                    intersectPoint = getLinesIntersectionPoint(
                        this.x, this.y, destinationX, destinationY,
                        this.platform.left, this.platform.top,
                        this.platform.left, this.platform.y
                    )
                    if (intersectPoint) this.setCollideData(intersectPoint, -1, 0, -3 /* platform l */)
                } else {
                    intersectPoint = getLinesIntersectionPoint(
                        this.x, this.y, destinationX, destinationY,
                        this.platform.right, this.platform.top,
                        this.platform.right, this.platform.y
                    )
                    if (intersectPoint) this.setCollideData(intersectPoint, 1, 0, -4 /* platform r */)
                }
            }
        }

        // проверка столкновенния с блоками
        brickIndex = this.bricks.length
        while(brickIndex > 0) {
            brickIndex--
            
            if (this.dx > 0) {
                intersectPoint = getLinesIntersectionPoint(
                    this.x, this.y, destinationX, destinationY,
                    this.bricks[brickIndex].left, this.bricks[brickIndex].top,
                    this.bricks[brickIndex].left, this.bricks[brickIndex].bottom
                )
                if (intersectPoint) this.setCollideData(intersectPoint, -1, 0, brickIndex)
            } else {
                intersectPoint = getLinesIntersectionPoint(
                    this.x, this.y, destinationX, destinationY,
                    this.bricks[brickIndex].right, this.bricks[brickIndex].top,
                    this.bricks[brickIndex].right, this.bricks[brickIndex].bottom
                )
                if (intersectPoint) this.setCollideData(intersectPoint, 1, 0, brickIndex)
            }
          
            if (this.dy > 0) {
                intersectPoint = getLinesIntersectionPoint(
                    this.x, this.y, destinationX, destinationY,
                    this.bricks[brickIndex].left, this.bricks[brickIndex].top,
                    this.bricks[brickIndex].right, this.bricks[brickIndex].top
                )
                if (intersectPoint) this.setCollideData(intersectPoint, 0, -1, brickIndex)
              
            } else {
                intersectPoint = getLinesIntersectionPoint(
                    this.x, this.y, destinationX, destinationY,
                    this.bricks[brickIndex].left, this.bricks[brickIndex].bottom,
                    this.bricks[brickIndex].right, this.bricks[brickIndex].bottom
                )
                if (intersectPoint) this.setCollideData(intersectPoint, 0, 1, brickIndex)
            }
        }
    }

    tick(time) {
        const path = this.speed * time.elapsedMS
        let destinationX = this.x + this.dx * path
        let destinationY = this.y + this.dy * path
        
        this.checkCollision(destinationX, destinationY)

        if (this.collideOffsetX === this.collideOffsetY) {
            // NO COLLISION
            this.x = destinationX
            this.y = destinationY
        } else {
            this.speed *= this.acc
            if (this.speed > BALL.maxSpeed) {
                this.acc = 1
                this.speed = BALL.maxSpeed
            }

            this.x = this.collideX + this.collideOffsetX
            this.y = this.collideY + this.collideOffsetY

            // PLATFORM
            if (this.collideBrickIndex === -2) {
                // collide with platform top
                const offsetRate = (this.platformOffset / this.platform.halfWidth) * 0.25
                this.dx += offsetRate
                this.dy = -Math.sqrt( Math.abs(1 - this.dx * this.dx) )
                return
            }
            if (this.collideBrickIndex < -2) {
                // collide with platform left or right
                this.dx *= -1
                this.dy *= -1
                return
            }

            if (this.collideBrickIndex > -1) {
                this.bricks[this.collideBrickIndex].getHit()
            }
          
            if (this.collideOffsetX) this.dx *= -1
            else this.dy *= -1
        }
    }

    kill() {
        this.path = 0
        tickerRemove(this)
        this.destroy()
    }

    accelerate() {
        this.speed *= BALL.accNegativeBonusRate
        if (this.speed > BALL.maxSpeed) {
            this.acc = 1
            this.speed = BALL.maxSpeed
        }
    }

    slowdown() {
        this.speed = BALL.startSpeed
    }
}

export default Ball