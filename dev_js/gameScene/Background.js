import { Container, Graphics, TilingSprite } from "pixi.js"
import { GAME_AREA } from "../constants"
import { tickerAdd } from "../engine/application"
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
        // this.background.alpha = 0.5
        
        this.addChild( this.background, this.backgroundMask )

        this.bgIndex = 0
        setTimeout( () => this.nextBG(), 4000 )

        // tickerAdd(this)
    }

    nextBG() {
        this.bgIndex++
        if (this.bgIndex > 21) this.bgIndex = 0
        this.background.texture = sprites['bg_'+this.bgIndex]
        setTimeout( () => this.nextBG(), 4000 )
    }
    
    tick(time) {
        this.background.tilePosition.y += time.elapsedMS * GAME_AREA.backgroundSpeed
    }
}

export default Background