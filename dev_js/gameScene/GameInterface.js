import { Container, Sprite, Text } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { EventHub, events } from '../engine/events'
import { sprites } from "../engine/loader"
import { OFFSETS } from "../constants"

class GameInterface extends Container {
    constructor(isLangRu, levelNumber) {
        super()

        this.isLangRu = isLangRu
        this.levelNumber = levelNumber

        this.boost = new Container()
        this.addChild(this.boost)

        //power, protect, add_platform_size, shuts, slow
        this.boost_slow = new Sprite(sprites.bonus_ui_buttons.textures.slow)
        this.boost_power = new Sprite(sprites.bonus_ui_buttons.textures.power)
        this.boost_size = new Sprite(sprites.bonus_ui_buttons.textures.add_platform_size)
        this.boost_guns = new Sprite(sprites.bonus_ui_buttons.textures.shuts)
        this.boost_protect = new Sprite(sprites.bonus_ui_buttons.textures.protect)
        this.boost_timer = new Sprite(sprites.bonus_ui_timer.textures.empty)

        this.boost.addChild(
            this.boost_slow, this.boost_power, this.boost_size,
            this.boost_guns, this.boost_protect, this.boost_timer
        )
        
        // EventHub.on( events.screenResize, this.screenResize, this)
    }

    setOrientation( isLandscape ) {
        if ('isLandscape' in this && isLandscape === this.isLandscape) return

        this.isLandscape = isLandscape

        this.boost_slow.position.set(0, 0)
        this.boost_power.position.set(OFFSETS.boostButtonOffset, 0)
        this.boost_size.position.set(OFFSETS.boostButtonOffset * 2, 0)
        this.boost_guns.position.set(OFFSETS.boostButtonOffset * 3, 0)
        this.boost_protect.position.set(OFFSETS.boostButtonOffset * 4, 0)
        this.boost_timer.position.set(OFFSETS.boostButtonOffset * 5 + OFFSETS.boostButton * 2, 0)
    }
}

export default GameInterface