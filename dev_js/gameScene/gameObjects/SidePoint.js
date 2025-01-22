import { Sprite } from "pixi.js";
import { sprites } from "../../engine/loader";
import Bullet from "./Bullet";
import { EventHub, events } from "../../engine/events"

class SidePoint extends Sprite {
    constructor(x, y) {
        super(sprites.side.textures.off)
        this.anchor.set(0.5)
        this.position.set(x, y)

        EventHub.on( events.turnOffProtectBoost, this.activation, this )
        EventHub.on( events.turnOffShootBoost, this.activation, this )
    }

    activation( isActive = false ) { console.log(isActive)
        this.texture = sprites.side.textures[ isActive ? 'on' : 'off' ]
    }

    shut(x) {
        this.parent.parent.addChild( new Bullet(this.position.x, this.position.y, {x: x, y: 0}) )
    }
}

export default SidePoint