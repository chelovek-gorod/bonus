import { Container, Sprite, Text } from "pixi.js"
import { textStyles } from '../engine/fonts'
import { EventHub, events } from '../engine/events'
import { sprites } from "../engine/loader"
import { OFFSETS, BOOSTS } from "../constants"
import { getState } from '../state'
import BoostButton from './UIObjects/BoostButton'
import BoostTimer from "./UIObjects/BoostTimer"
import { tickerAdd, tickerRemove } from "../engine/application"
import FlyingText from "./UIObjects/FlyingText"

class GameInterface extends Container {
    constructor(isLangRu, levelNumber, areaData) {
        super()

        this.stateData = getState()

        this.isLangRu = isLangRu
        this.levelNumber = levelNumber
        this.starsTimeoutList = areaData.starsTimeoutList
        this.starsTimeout = this.starsTimeoutList.pop()
        this.starTime = 1000
        this.stars = 3

        this.boost = new Container()
        this.addChild(this.boost)

        //power, protect, add_platform_size, shuts, slow
        this.boost_slow = new BoostButton(BOOSTS.slow, this.stateData, areaData)
        this.boost_power = new BoostButton(BOOSTS.power, this.stateData, areaData)
        this.boost_size = new BoostButton(BOOSTS.widens, this.stateData, areaData)
        this.boost_guns = new BoostButton(BOOSTS.shoot, this.stateData)
        this.boost_protect = new BoostButton(BOOSTS.protect, this.stateData)

        this.boost_timer = new BoostTimer()

        this.boost.addChild(
            this.boost_slow, this.boost_power, this.boost_size,
            this.boost_guns, this.boost_protect, this.boost_timer
        )

        this.info = new Container()
        this.addChild(this.info)

        this.info_level = new Text(
            {text: isLangRu ? 'УРОВЕНЬ ' + levelNumber : 'LEVEL ' + levelNumber, style: textStyles.gameLevel}
        )
        this.info.addChild(this.info_level)

        this.info_stars_image = new Sprite(sprites.level_ui_stars.textures[this.stars])
        this.info_stars_image.scale.set(0.75)
        this.info_stars_text = new Text({text: this.starsTimeout, style: textStyles.starsTimer})
        this.info.addChild(this.info_stars_image, this.info_stars_text)

        this.info_score = new Text({text: this.stateData.score, style: textStyles.gameScore})
        this.info_score.anchor.set(0.5, 0)
        this.info.addChild(this.info_score)

        this.info_coin_image = new Sprite(sprites.coin)
        this.info_coin_image.scale.set(0.75)
        this.info_coin_image.anchor.set(1, 0)
        this.info_coin_text = new Text({text: 'x' + this.stateData.coins, style: textStyles.gameCoins})
        this.info.addChild(this.info_coin_image, this.info_coin_text)

        this.info_ball_image = new Sprite(sprites.ball_icon)
        this.info_ball_image.anchor.set(1, 0)
        this.info_ball_text = new Text({text: 'x' + this.stateData.balls, style: textStyles.gameBalls})
        this.info_ball_text.anchor.set(1, 0)
        this.info.addChild(this.info_ball_image, this.info_ball_text)

        this.info_power_image = new Sprite(sprites.power)
        this.info_power_image.anchor.set(1, 0)
        this.info_power_text = new Text({text: 'x1', style: textStyles.ballPowers})
        this.info_power_text.anchor.set(1, 0)
        this.info.addChild(this.info_power_image, this.info_power_text)

        this.info_menu_image = new Sprite(sprites.menu_button)
        this.info_menu_image.anchor.set(1, 0)
        const menuText = isLangRu
        ? '[Esc] - Выход в меню \n'
        + '[A] - замедление \n'
        + '[S] - усиление     \n'
        + '[D] - расширение\n'
        + '[W] - стрельба       \n'
        + '[E] - защита         '

        : '[Esc] - Game menu  \n'
        + '[A] - slow down\n'
        + '[S] - power up  \n'
        + '[D] - add width \n'
        + '[W] - shoot          \n'
        + '[E] - protection'
        this.info_menu_text = new Text({text: menuText, style: textStyles.gameMenu})
        this.info_menu_text.anchor.set(0.5, 0)

        tickerAdd(this)

        EventHub.on( events.addScore, this.addScore, this)
    }

    setOrientation( isLandscape ) {
        if ('isLandscape' in this && isLandscape === this.isLandscape) return

        this.isLandscape = isLandscape

        if (isLandscape) {
            this.info.removeChild(this.info_menu_image)
            this.info.addChild(this.info_menu_text)

            const boostButtonOffset = OFFSETS.boostButton + OFFSETS.boostButtonSize

            this.boost_slow.position.set(0, -OFFSETS.boostButtonSize)
            this.boost_power.position.set(boostButtonOffset, -OFFSETS.boostButtonSize)
            this.boost_size.position.set(boostButtonOffset * 2, -OFFSETS.boostButtonSize)

            const point_y1 = -OFFSETS.boostButtonSize - boostButtonOffset
            this.boost_guns.position.set(boostButtonOffset * 0.5, point_y1)
            this.boost_protect.position.set(boostButtonOffset * 1.5, point_y1)
            this.boost_timer.position.set(boostButtonOffset, point_y1 - boostButtonOffset)
        } else {
            this.info.addChild(this.info_menu_image)
            this.info.removeChild(this.info_menu_text)
            const boostButtonOffset = OFFSETS.boostButton + OFFSETS.boostButtonSize
            this.boost_slow.position.set(0, 0)
            this.boost_power.position.set(boostButtonOffset, 0)
            this.boost_size.position.set(boostButtonOffset * 2, 0)
            this.boost_guns.position.set(boostButtonOffset * 3, 0)
            this.boost_protect.position.set(boostButtonOffset * 4, 0)
            this.boost_timer.position.set(boostButtonOffset * 5 + OFFSETS.boostButton * 2, 0)
        }
    }

    addScore(scoreData) {
        this.stateData.score += scoreData.score
        this.info_score.text = this.stateData.score

        this.parent.area.addChild( new FlyingText(scoreData.x, scoreData.y, scoreData.score) )
    }

    addBall() {
        this.stateData.balls++
        this.info_ball_text.text = 'x' + this.stateData.balls
    }

    addPower(power) {
        this.info_power_text.text = 'x' + power
    }

    getBall() {
        if (this.stateData.balls < 1) return false

        this.stateData.balls--
        this.info_ball_text.text = 'x' + this.stateData.balls
        return true
    }

    tick( time ) {
        this.starTime -= time.elapsedMS
        if (this.starTime > 0) return

        this.starTime += 1000
        this.starsTimeout--
        this.info_stars_text.text = this.starsTimeout
        if (this.starsTimeout > 0) return
        
        this.stars--
        this.info_stars_image.texture = sprites.level_ui_stars.textures[this.stars]
        if (this.starsTimeoutList.length > 0) {
            this.starsTimeout = this.starsTimeoutList.pop()
            this.info_stars_text.text = this.starsTimeout
            this.starTime += 1000
        } else {
            this.info.removeChild(this.info_stars_text)
            tickerRemove(this)
        }
    }

    stopTimer() {
        tickerRemove(this)
    }
}

export default GameInterface