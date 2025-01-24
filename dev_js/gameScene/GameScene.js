import { Container, Text, Assets, Graphics } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { getAppScreen, sceneAdd } from '../engine/application'
import { EventHub, events, getHotKey, openGameMenu } from '../engine/events'
import { CEIL_SIZE, CEIL_HALF_SIZE, GAME_AREA, OFFSETS, BOOSTS, NEW_BALL_DELAY,
    BOOST_PROTECT_TIMEOUT, BOOST_SHOOT_TIMEOUT, BOOST_STOP_TIMEOUT } from "../constants"
import GameInterface from "./GameInterface"
import GameArea from "./GameArea"
import Background from "./Background"
import Bonus from "./gameObjects/Bonus"

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

        this.newBallTimeout = null

        this.control = new Graphics()
        this.control.eventMode = 'static'
        this.control.on('pointermove', (e) => this.area.platform.move(e) )

        EventHub.on( events.useBoost, this.useBoost, this )
        EventHub.on( events.showBoostBelowPlatform, this.showBoostBelowPlatform, this )
        EventHub.on( events.loseBall, this.loseBall, this )
        EventHub.on( events.checkLevelClear, this.checkLevelClear, this )

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

        if (screenData.isLandscape) {
            const availableWidth = screenData.width - OFFSETS.screen * 2
            const availableHeight = screenData.height - OFFSETS.screen * 2
            const scaleX = availableWidth / (this.areaWidth * 1.5) // +50% UI
            const scaleY = availableHeight / this.areaHeight
            let scale = scaleX > scaleY ? scaleY : scaleX
            if (scale > 1) scale = 1

            const areaScaledWidth = this.areaWidth * scale
            const areaScaledHeight = this.areaHeight * scale

            const offsetX = (screenData.width - areaScaledWidth * 1.5) * 0.5 // +50% UI
            const offsetY = (screenData.height - areaScaledHeight) * 0.5
            const areaPointX = offsetX + areaScaledWidth * 0.5
    
            this.bg.backgroundMask.scale.set(scale)
            this.bg.backgroundMask.scale.set(scale)
            this.bg.background.width = this.areaWidth
            this.bg.background.height = this.areaHeight
            //this.bg.background.tilePosition.set(this.areaWidth * 0.5, this.areaHeight * 0.5)
            //this.bg.background.tileScale.set(scale)

            this.area.scale.set(scale)
    
            this.bg.position.set(areaPointX, offsetY)
            this.area.position.set(areaPointX, offsetY)
    
            this.area.platform.moveScale = scale
            this.area.platform.moveOffset = areaPointX
            
            this.area.dropShadowFilter.offset.x = GAME_AREA.shadow.offset.x * scale
            this.area.dropShadowFilter.offset.y = GAME_AREA.shadow.offset.y * scale

            // control
            this.control.clear()
            this.control.rect(areaPointX, offsetY, areaScaledWidth, areaScaledHeight)
            this.control.fill({color: 0x000000, alpha: 0.0001})
            // this.control.stroke({width: 2, color: 0x00ff00})

            // UI
            this.ui.info.scale.set(scale)
            this.ui.info.position.set(offsetX, offsetY)

            //this.ui.info_level
            this.ui.info_stars_image.position.set(0, 92)
            this.ui.info_stars_text.position.set(this.ui.info_stars_image.width + 16, 86)
            
            const ui_width = this.areaWidth * 0.5 - OFFSETS.boostButton

            this.ui.info_ball_text.position.set(ui_width, 0)
            const ball_image_x = this.ui.info_ball_text.position.x - this.ui.info_ball_text.width - 16
            this.ui.info_ball_image.position.set(ball_image_x, 12)

            this.ui.info_power_text.position.set(ui_width - 24, 90)
            const info_power_image_x = this.ui.info_power_text.position.x - this.ui.info_power_text.width - 16
            this.ui.info_power_image.position.set(info_power_image_x, 96)

            const infoCenterX = ui_width * 0.5 - OFFSETS.boostButton

            this.ui.info_menu_text.position.set(infoCenterX, this.ui.info_power_image.position.y + 128)

            this.ui.boost.scale.set(scale)
            this.ui.boost.position.set(offsetX, offsetY + areaScaledHeight)
            
            const scoreTop = this.areaHeight - (OFFSETS.boostButton * 4 + OFFSETS.boostButtonSize * 4)

            this.ui.info_score.position.set(infoCenterX, scoreTop)

            this.ui.info_coin_text.position.set(infoCenterX, scoreTop + 86)
            this.ui.info_coin_image.position.set(infoCenterX - 16, scoreTop + 92)

        } else {
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
        }
    }

    setup(data) {
        this.removeChild(this.loadingText)
        this.loadingText = null

        this.areaWidth = data.map[0].length * CEIL_HALF_SIZE
        this.areaHeight = data.map.length * CEIL_SIZE

        this.bg = new Background(data.backgroundIndex, this.areaWidth, this.areaHeight)
        this.area = new GameArea(data.map, this.areaWidth, this.areaHeight)
        this.ui = new GameInterface(this.isLangRu, this.levelNumber, this.area)
        
        this.screenResize(this.screenData)

        this.addChild(this.control, this.bg, this.area, this.ui)

        this.newBallTimeout = setTimeout(() => {
            this.ui.getBall()
            this.area.addBall()
            clearTimeout(this.newBallTimeout)
        }, NEW_BALL_DELAY)
    }

    useBoost( type ) {
        // power, protect, add_platform_size, shuts, slow
        switch (type) {
            case BOOSTS.acceleration:
                this.area.balls.children.forEach(b => b.accelerate())
                break

            case BOOSTS.ball:
                this.ui.addBall()
                break

            case BOOSTS.power:
                this.area.ballPower++
                this.ui.addPower(this.area.ballPower)
                break

            case BOOSTS.protect:
                this.ui.boost_timer.setBoost(BOOSTS.protect, BOOST_PROTECT_TIMEOUT)
                this.area.sidePoints.children.forEach( side => side.activation(true) )
                this.area.protect.activate()
                break

            case BOOSTS.shoot:
                this.ui.boost_timer.setBoost(BOOSTS.shoot, BOOST_SHOOT_TIMEOUT)
                this.area.sidePoints.children.forEach( side => side.activation(true) )
                this.area.guns.activate()
                break

            case BOOSTS.shrink:
                this.area.platform.resize(false)
                break

            case BOOSTS.slow:
                this.area.balls.children.forEach( ball => ball.slowdown() )
                break

            case BOOSTS.stop:
                this.ui.boost_timer.setBoost(BOOSTS.stop, BOOST_STOP_TIMEOUT)
                this.area.platform.activation(false)
                break

            case BOOSTS.triple:
                this.area.addBall( 2 )
                break

            case BOOSTS.widens:
                this.area.platform.resize(true)
                break
        }
    }

    showBoostBelowPlatform(type) {
        this.area.bonuses.addChild(
            new Bonus(this.area.platform.x, this.area.platform.y, type, null, true)
        )
    }

    loseBall() {
        this.newBallTimeout = setTimeout(() => {
            if (this.area.balls.children.length > 0) return

            const isBall = this.ui.getBall()
            if (isBall) this.area.addBall()
            else alert('NO MORE BALLS')
            clearTimeout(this.newBallTimeout)
        }, NEW_BALL_DELAY)
    }

    checkLevelClear() {
        if (this.area.availableBrickCounter > 0) return
        if (this.area.bonuses.children.length > 0) return
        this.ui.stopTimer()
        this.area.balls.children.forEach( ball => ball.speed = 0 )
        setTimeout(() => alert('LEVEL CLEAR'), NEW_BALL_DELAY)
    }
}

document.addEventListener('keydown', (event) => {
    switch(event.code) {
        case 'KeyA' : getHotKey( BOOSTS.slow ); break
        case 'KeyS' : getHotKey( BOOSTS.power ); break
        case 'KeyD' : getHotKey( BOOSTS.widens ); break
        case 'KeyW' : getHotKey( BOOSTS.shoot ); break
        case 'KeyE' : getHotKey( BOOSTS.protect ); break

        case 'Escape' : openGameMenu(); break
    }
})

export default GameScene