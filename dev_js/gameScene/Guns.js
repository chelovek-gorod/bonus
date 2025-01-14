import { CEIL_HALF_SIZE, BONUS_TIMEOUT, SHUT_TIMEOUT } from "../constants"

class Guns {
    constructor(parent) {
        this.parent = parent
        this.shutInterval = null

        this.isActive = false
    }

    activate() {
        setTimeout(() => this.deactivate(), BONUS_TIMEOUT)
        setInterval(() => this.shut(), SHUT_TIMEOUT)
    }

    deactivate() {
        this.isActive = false
        clearInterval(this.shutInterval)
        this.parent.sidePoints.children.forEach( p => p.close() )
    }

    shut() {
        const offsetX = this.parent.platform.halfWidth - CEIL_HALF_SIZE
        this.parent.sidePoints.children[0].shut(this.parent.platform.position.x - offsetX)
        this.parent.sidePoints.children[1].shut(this.parent.platform.position.x + offsetX)
    }
}

export default Guns