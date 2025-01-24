import { Container, Graphics, TilingSprite } from "pixi.js"
import { GAME_AREA } from "../constants"
import { sprites } from "../engine/loader"

class Background extends Container {
    constructor(backgroundIndex, width, height) {
        super()

        this.backgroundMask = new Graphics()
        this.backgroundMask.roundRect(0, 0, width, height, GAME_AREA.borderRadius)
        this.backgroundMask.fill({color: "#000000"})

        this.background = new TilingSprite(sprites[`bg_${backgroundIndex}`])
        this.background.width = width
        this.background.height = height
        this.background.tilePosition.set(width * 0.5, height * 0.5)
        this.background.mask = this.backgroundMask
        
        this.addChild( this.background, this.backgroundMask )
    }
}

export default Background