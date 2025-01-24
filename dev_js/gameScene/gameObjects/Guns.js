import { CEIL_HALF_SIZE, SHUT_TIMEOUT } from "../../constants"
import { EventHub, events } from "../../engine/events"

class Guns {
    constructor(parent) {
        this.parent = parent
        this.shutInterval = null

        EventHub.on( events.turnOffShootBoost, this.deactivate, this )
    }

    activate() {
        clearInterval(this.shutInterval)
        this.shutInterval = setInterval(() => this.shut(), SHUT_TIMEOUT)
    }

    deactivate() {
        clearInterval(this.shutInterval)
    }

    shut() {
        const offsetX = this.parent.platform.halfWidth - CEIL_HALF_SIZE
        this.parent.sidePoints.children[0].shut(this.parent.platform.position.x - offsetX)
        this.parent.sidePoints.children[1].shut(this.parent.platform.position.x + offsetX)
    }
}

export default Guns