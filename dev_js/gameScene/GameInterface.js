import { Container, Text } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { EventHub, events } from '../engine/events'

class GameInterface extends Container {
    constructor(isLangRu, levelNumber, screenData) {
        super()

        this.isLangRu = isLangRu
        this.levelNumber = levelNumber
        
        EventHub.on( events.screenResize, this.screenResize, this)

        this.screenResize(screenData)
    }

    screenResize(screenData) {
        this.position.x = screenData.centerX
        this.position.y = screenData.centerY
    }
}

export default GameInterface