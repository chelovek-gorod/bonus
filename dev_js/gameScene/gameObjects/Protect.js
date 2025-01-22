import { Graphics } from "pixi.js";
import { PROTECTOR } from "../../constants"
import { EventHub, events } from '../../engine/events'

class Protect extends Graphics {
    constructor(left, right) {
        super()
        this.color = PROTECTOR.color
        this.alpha = PROTECTOR.alpha
        this.radius = PROTECTOR.width

        this.leftPoint = {x: left.x, y: left.y}
        this.rightPoint = {x: right.x, y: right.y}

        EventHub.on( events.turnOffProtectBoost, this.clear, this )
    }

    activate() {
        this.roundRect(
            this.leftPoint.x - this.radius,
            this.leftPoint.y - this.radius,
            this.rightPoint.x - this.radius,
            this.radius + this.radius,
            this.halfWidth
        )
        this.fill(this.color)
    }
}

export default Protect