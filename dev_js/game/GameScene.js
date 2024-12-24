import { Container } from "pixi.js"

import PlayGround from "./PlayGround"

class GameScene extends Container {
    constructor(screenData) {
        super()

        this.addChild( new PlayGround(screenData, 1) )
    }
}

export default GameScene