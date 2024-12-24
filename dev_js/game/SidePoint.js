import { AnimatedSprite } from "pixi.js";
import { sprites } from "../engine/loader";

class SidePoint extends AnimatedSprite {
    constructor(x, y) {
        super(sprites.side.animations.open)
        this.anchor.set(0.5)
        this.position.set(x, y)
        this.loop = false
        //this.play()
    }

    protect() {
        this.play()
        this.onComplete = () => {
            this.textures = sprites.side.animations.close
            console.log(this.parent.parent.protect)
            if (this.parent.parent.protect.isActive) return
            this.parent.parent.protect.activate()
        }
    }

    shut() {
        this.play()
        this.onComplete = () => {
            this.textures = sprites.side.animations.close
            console.log(this.parent.parent.protect)
            if (this.parent.parent.protect.isActive) return
            this.parent.parent.protect.activate()
        }
    }

    close() {
        this.play()
        this.onComplete = () => {
            this.textures = sprites.side.animations.open
        }
    }
}

export default SidePoint