import { Graphics } from "pixi.js";
import { CONST } from "../constants"

class Protect extends Graphics {
    constructor() {
        super()
        this.color = CONST.playground.protector.color
        this.alpha = CONST.playground.protector.alpha
        this.radius = CONST.playground.protector.width

        this.leftPoint = null
        this.rightPoint = null

        this.isActive = false
    }

    initPoint(x, y) {
        if (!this.leftPoint) this.leftPoint = {x, y}
        else this.rightPoint = {x, y}
    }

    activate() {
        this.isActive = true
        this.roundRect(
            this.leftPoint.x - this.radius,
            this.leftPoint.y - this.radius,
            this.rightPoint.x - this.radius,
            this.radius + this.radius,
            this.halfWidth
        )
        this.fill(this.color)

        setTimeout(() => this.deactivate(), 5000)
    }

    deactivate() {
        this.isActive = false
        this.clear()
        this.parent.sidePoints.children.forEach( p => p.close() )
    }
}

export default Protect