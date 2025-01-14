import { Graphics } from "pixi.js";
import { BONUS_TIMEOUT, PROTECTOR } from "../constants"

class Protect extends Graphics {
    constructor(left, right) {
        super()
        this.color = PROTECTOR.color
        this.alpha = PROTECTOR.alpha
        this.radius = PROTECTOR.width

        this.leftPoint = {x: left.x, y: left.y}
        this.rightPoint = {x: right.x, y: right.y}

        this.isActive = false
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

        setTimeout(() => this.deactivate(), BONUS_TIMEOUT)
    }

    deactivate() {
        this.isActive = false
        this.clear()
        this.parent.sidePoints.children.forEach( p => p.close() )
    }
}

export default Protect