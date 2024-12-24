import { Container, Sprite, TilingSprite, DisplacementFilter } from "pixi.js"
import { tickerAdd, tickerRemove } from "../engine/application"
import { sprites } from "../engine/loader"
import { EventHub, events } from '../engine/events'

const padding = 24

class BG extends Container {
    constructor( screenData ) {
        super()

        this.image = new TilingSprite( sprites.bg_8 )
        this.image.anchor.set(0.5, 0.5)
        this.image.alpha = 0.25
        this.addChild(this.image)

        this.filterSprite = new Sprite(sprites.dpf_1)
        this.filterSprite.scale = 1
        this.filterSprite.texture.source.style.addressMode = 'repeat'
        this.addChild(this.filterSprite)

        this.waterEffectFilter = new DisplacementFilter(this.filterSprite)
        this.waterEffectFilter.padding = padding * 0.5
        this.filters = [this.waterEffectFilter]

        this.screenResize( screenData )
        EventHub.on( events.screenResize, this.screenResize.bind(this) )

        tickerAdd(this)
    }


    screenResize(screenData) {
        this.position.x = screenData.centerX
        this.position.y = screenData.centerY

        this.image.width = screenData.width + padding
        this.image.height = screenData.height + padding
    }

    tick(time) {
        this.filterSprite.position.x += time.elapsedMS * 0.025
        this.filterSprite.position.y += time.elapsedMS * 0.025

        this.image.tilePosition.y += time.elapsedMS * 0.03
        //time.deltaTime * 0.3
    }
}

export default BG