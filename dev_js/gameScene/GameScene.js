import { Container, Text, Assets, Graphics } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { getAppScreen, sceneAdd } from '../engine/application'
import { EventHub, events } from '../engine/events'
import { CEIL_SIZE, CEIL_HALF_SIZE, GAME_AREA, OFFSETS } from "../constants"
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
        this.loadingText.anchor.set(0.5)
        this.addChild(this.loadingText)

        this.bg = null
        this.area = null
        this.ui = null

        this.control = new Graphics()
        this.control.eventMode = 'static'
        this.control.on('pointermove', (e) => this.area.platform.move(e) )

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

        this.ui.setOrientation(screenData.isLandscape)

        if (screenData.isLandscape) { true }
        if (true) {
            // if screenData.isLandscape = false

            const offsetV = OFFSETS.boostButton + OFFSETS.boostButtonSize

            const availableWidth = screenData.width - OFFSETS.screen * 2
            const availableHeight = screenData.height - OFFSETS.screen * 2 - OFFSETS.mobControl
            const scaleX = availableWidth / this.areaWidth
            const scaleY = availableHeight / (this.areaHeight + offsetV) 
            let scale = scaleX > scaleY ? scaleY : scaleX
            if (scale > 1) scale = 1

            const areaScaledWidth = this.areaWidth * scale
            const areaScaledHeight = this.areaHeight * scale
            const offsetScaledV = offsetV * scale
    
            this.bg.backgroundMask.scale.set(scale)
            this.bg.background.width = this.areaWidth
            this.bg.background.height = this.areaHeight

            this.area.scale.set(scale)
    
            const areaPointX = (screenData.width - areaScaledWidth) * 0.5
            const freeV = (screenData.height - areaScaledHeight - offsetScaledV - OFFSETS.mobControl)
            const areaPointY = freeV * 0.5 + offsetScaledV  
    
            this.bg.position.set(areaPointX, areaPointY)
            this.area.position.set(areaPointX, areaPointY)
    
            this.area.platform.moveScale = scale
            this.area.platform.moveOffset = areaPointX
            
            this.area.dropShadowFilter.offset.x = GAME_AREA.shadow.offset.x * scale
            this.area.dropShadowFilter.offset.y = GAME_AREA.shadow.offset.y * scale

            // control
            const controlHeight = screenData.height - areaPointY - OFFSETS.screen
            this.control.clear()
            this.control.rect(areaPointX, areaPointY, areaScaledWidth, controlHeight)
            this.control.fill({color: 0x00ff00})

            // UI
            this.ui.boost.scale.set(scale)
            this.ui.boost.position.set(areaPointX, areaPointY - offsetScaledV)
        } else {
            false
        }
    }

    setup(data) {
        this.removeChild(this.loadingText)
        this.loadingText = null

        this.areaWidth = data.map[0].length * CEIL_HALF_SIZE
        this.areaHeight = data.map.length * CEIL_SIZE

        this.bg = new Background(data.backgroundIndex, this.areaWidth, this.areaHeight)
        this.area = new GameArea(data.map, this.areaWidth, this.areaHeight)
        this.ui = new GameInterface(this.isLangRu, this.levelNumber)
        
        this.screenResize(this.screenData)

        this.addChild(this.control, this.bg, this.area, this.ui)
    }
}

export default GameScene