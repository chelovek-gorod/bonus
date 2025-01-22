import { Container, Sprite, Text } from "pixi.js"
import { sprites } from "../../engine/loader"
import { textStyles } from '../../engine/fonts'
import { useBoost } from "../../engine/events"

class BoostButton extends Container {
    constructor(type, count) {
        super()

        this.type = type

        this.image = new Sprite(sprites.boost_ui_buttons.textures[type])
        this.addChild(this.image)

        this.countShadow = new Sprite(sprites.boost_shadow)

        this.countText = new Text({text: 'x' + count, style: textStyles.boostCounter})
        this.countText.anchor.set(0.5)
        this.countText.position.set(96, 156)

        if ( count > 0) this.addChild(this.countShadow, this.countText)
        
        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )
    }

    setCount( count ) {
        if (count > 0) {
            this.countText.text = 'x' + count
            this.addChild(this.countShadow, this.countText)
        } else {
            this.removeChild(this.countShadow, this.countText)
        }
    }

    getClick() {
        if (this.count < 1) return

        useBoost(this.type)
    }
}

export default BoostButton