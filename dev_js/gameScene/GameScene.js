import { Container, Text, Assets } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { getAppScreen, sceneAdd } from '../engine/application'
import { EventHub, events } from '../engine/events'
import { CEIL_SIZE, CEIL_HALF_SIZE, GAME_AREA, BALL_RADIUS, BALL } from "../constants"
import GameInterface from "./GameInterface"
import GameArea from "./GameArea"
import Background from "./Background"

class GameScene extends Container {
    constructor(isLangRu, levelNumber) {
        super()
        this.isLangRu = isLangRu
        this.levelNumber = levelNumber
        this.screenData = getAppScreen()
        
        const loadingText = isLangRu ? 'Загрузка уровня...' : 'Level loading...'
        this.loadingText = new Text({text: loadingText, style: textStyles.level})
        this.addChild(this.loadingText)

        this.bg = null
        this.area = null
        this.ui = null

        Assets.load(`./levels/level_${levelNumber}.json`).then( this.setup.bind(this) )
        EventHub.on( events.screenResize, this.screenResize, this)

        this.screenResize(this.screenData)
        sceneAdd(this)
    }

    screenResize(screenData) {

        if (this.loadingText) {
            this.screenData = screenData

            this.loadingText.position.x = this.screenData.centerX
            this.loadingText.position.y = this.screenData.centerY

            return
        }

        const offsetH = (GAME_AREA.offset.left + GAME_AREA.offset.right)
        const offsetV = (GAME_AREA.offset.top + GAME_AREA.offset.bottom)
        const areaWidth = screenData.width - offsetH
        const areaHeight = screenData.height - offsetV
        const scaleX = areaWidth / this.areaWidth
        const scaleY = areaHeight / this.areaHeight
        let scale = scaleX > scaleY ? scaleY : scaleX
        if (scale > 1) scale = 1

        this.bg.backgroundMask.scale.set(scale)
        this.bg.background.width = this.areaWidth * scale
        this.bg.background.height = this.areaHeight * scale
        this.area.scale.set(scale)

        const areaPointX = (screenData.width - this.areaWidth * scale) * 0.5
        const areaPointY = (screenData.height - this.areaHeight * scale) * 0.5

        this.bg.position.set(areaPointX, areaPointY)
        this.area.position.set(areaPointX, areaPointY)

        this.area.platform.moveScale = scale
        this.area.platform.moveOffset = areaPointX
        
        this.area.dropShadowFilter.offset.x = GAME_AREA.shadow.offset.x * scale
        this.area.dropShadowFilter.offset.y = GAME_AREA.shadow.offset.y * scale
    }

    setup(data) {
        this.removeChild(this.loadingText)
        this.loadingText = null

        this.areaWidth = data.map[0].length * CEIL_HALF_SIZE
        this.areaHeight = data.map.length * CEIL_SIZE

        this.bg = new Background(data.backgroundIndex, this.areaWidth, this.areaHeight)
        this.area = new GameArea(data.map, this.areaWidth, this.areaHeight)
        this.ui = new GameInterface(this.isLangRu, this.levelNumber, this.screenData)
        
        this.screenResize(this.screenData)

        this.addChild(this.bg, this.area, this.ui)
    }
}

export default GameScene