import { Container, Sprite, Text } from "pixi.js"
import { sprites } from "../../engine/loader"
import { textStyles } from '../../engine/fonts'
import { getBoostButtonClick } from "../../engine/events"

class BoostButton extends Container {
    constructor(sprite, count) {
        super()

        this.count = count

        this.image = new Sprite(sprites.bonus_ui_buttons.textures[sprite])
        this.addChild(this.image)

        this.countShadow = new Sprite(sprites.bonus_shadow)

        this.countText = new Text({text: 'x' + this.count, style: textStyles.boostCounter})
        this.countText.anchor.set(0.5)
        this.countText.position.set(96, 156)

        if ( this.count > 0) this.addChild(this.countShadow, this.countText)
        
        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )
    }

    addCount( count = 1 ) {
        this.count += count
        if (this.count > 0) {
            this.countText.text = 'x' + this.count
            this.addChild(this.countShadow, this.countText)
        } else {
            this.removeChild(this.countShadow, this.countText)
        }
    }

    getClick() {
        if (this.count < 1) return
        // power, protect, add_platform_size, shuts, slow
        getBoostButtonClick(this.image.texture)
    }
}

export default BoostButton