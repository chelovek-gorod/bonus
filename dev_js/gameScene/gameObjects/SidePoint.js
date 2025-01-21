import { AnimatedSprite } from "pixi.js";
import { sprites } from "../../engine/loader";
import Bullet from "./Bullet";

class SidePoint extends AnimatedSprite {
    constructor(x, y) {
        super(sprites.side.animations.open)
        this.anchor.set(0.5)
        this.scale.set(0.75)
        this.position.set(x, y)
        this.loop = false
        //this.play()
    }

    protect() {
        this.play()
        this.onComplete = () => {
            this.textures = sprites.side.animations.close
            
            if (this.parent.parent.protect.isActive) return
            this.parent.parent.protect.activate()
        }
    }

    startShut() {
        this.play()
        this.onComplete = () => {
            this.textures = sprites.side.animations.close
            
            if (this.parent.parent.guns.isActive) return
            this.parent.parent.guns.activate()
        }
    }

    close() {
        this.play()
        this.onComplete = () => {
            this.textures = sprites.side.animations.open
        }
    }

    shut(x) {
        this.parent.parent.addChild( new Bullet(this.position.x, this.position.y, {x: x, y: 0}) )
    }
}

export default SidePoint