import { Container, Text, Assets, Graphics, TilingSprite } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { getAppScreen, sceneAdd } from '../engine/application'
import { EventHub, events, getBoostButtonClick } from '../engine/events'
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
        this.loadingText = new Text({text: loadingText, style: textStyles.levelLoading})
        this.loadingText.anchor.set(0.5)
        this.addChild(this.loadingText)

        this.bg = null
        this.area = null
        this.ui = null

        this.control = new Graphics()
        this.control.eventMode = 'static'
        this.control.on('pointermove', (e) => this.area.platform.move(e) )

        EventHub.on( events.getBoostButtonClick, this.useBoost, this)
        EventHub.on( events.collectBoost, this.addBoost, this)

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

            const offsetV = OFFSETS.boostButton * 3 + OFFSETS.boostButtonSize + OFFSETS.mbInfoSize

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
            this.bg.backgroundMask.scale.set(scale)
            this.bg.background.width = this.areaWidth
            this.bg.background.height = this.areaHeight
            //this.bg.background.tilePosition.set(this.areaWidth * 0.5, this.areaHeight * 0.5)
            //this.bg.background.tileScale.set(scale)

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
            this.control.fill({color: 0x000000, alpha: 0.0001})
            // this.control.stroke({width: 2, color: 0x00ff00})

            // UI
            this.ui.info.scale.set(scale)
            this.ui.info.position.set(areaPointX, areaPointY - offsetScaledV)

            //this.ui.info_level
            this.ui.info_stars_image.position.set(0, 92)
            this.ui.info_stars_text.position.set(this.ui.info_stars_image.width + 16, 86)

            this.ui.info_menu_image.position.set(this.areaWidth, 32)

            this.ui.info_ball_text.position.set(this.areaWidth - 160, 0)
            const info_ball_image_x = this.ui.info_ball_text.position.x - this.ui.info_ball_text.width - 16
            this.ui.info_ball_image.position.set(info_ball_image_x, 12)

            this.ui.info_power_text.position.set(this.areaWidth - 160, 86)
            const info_power_image_x = this.ui.info_power_text.position.x - this.ui.info_power_text.width - 16
            this.ui.info_power_image.position.set(info_power_image_x, 92)

            this.ui.info_score.position.set(this.areaWidth * 0.5, 0)

            this.ui.info_coin_text.position.set(this.areaWidth * 0.5, 86)
            this.ui.info_coin_image.position.set(this.ui.info_coin_text.x - 16, 92)

            this.ui.boost.scale.set(scale)
            const buttonsOffset = (OFFSETS.boostButton + OFFSETS.boostButtonSize) * scale
            this.ui.boost.position.set(areaPointX, areaPointY - buttonsOffset)
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
        this.ui = new GameInterface(this.isLangRu, this.levelNumber, this.area.starsTimeoutList)
        
        this.screenResize(this.screenData)

        this.addChild(this.control, this.bg, this.area, this.ui)
    }

    useBoost( type ) {
        // power, protect, add_platform_size, shuts, slow
        switch (this.image.texture) {
            case "power" : this.parent.parent.area.ballPower++; break;

            // positive
            case "add_ball" : this.parent.parent.addBall(1); break;
            case "add_platform_size" :  this.platform.resize( true ); break;
            case "extra_balls" : this.parent.parent.addBall(3); break;
            
            case "protection" : this.parent.parent.sidePoints.children.forEach( p => p.protect() ); break;
            case "shuts" : this.parent.parent.sidePoints.children.forEach( p => p.startShut() ); break;
            case "slow" : this.parent.parent.balls.children.forEach(b => b.slowdown()); break;
            // negative
            case "resize" :  this.platform.resize( false ); break;
            case "stop" :  this.platform.isActive = false; setTimeout(()=>this.platform.isActive = true,12000); break;
            case "acceleration" : this.parent.parent.balls.children.forEach(b => b.accelerate()); break;
            // default : this.parent.sidePoints.children.forEach( p => p.protect() ); break;
        }
    }

    addBoost(type) {

    }
}

export default GameScene