import { Sprite } from "pixi.js";
import { sprites } from "../../engine/loader";
import Bullet from "./Bullet";
import { EventHub, events } from "../../engine/events"

class SidePoint extends Sprite {
    constructor(x, y) {
        super(sprites.side.textures.off)
        this.anchor.set(0.5)
        this.position.set(x, y)

        this.isActive = false
        this.count = 0

        EventHub.on( events.turnOffProtectBoost, this.activation, this )
        EventHub.on( events.turnOffShootBoost, this.activation, this )
        EventHub.on( events.sidePointBlink, this.blink, this )
    }

    blink() {
        this.count++
        if (this.count == 3) {
            this.count = 0
            this.isActive = !this.isActive
            this.texture = sprites.side.textures[ this.isActive ? 'on' : 'off' ]
        }
    }

    activation( isActive = false ) {
        this.isActive = isActive
        this.texture = sprites.side.textures[ isActive ? 'on' : 'off' ]
    }

    shut(x) {
        this.parent.parent.addChild( new Bullet(this.position.x, this.position.y, {x: x, y: 0}) )
    }
}

export default SidePoint