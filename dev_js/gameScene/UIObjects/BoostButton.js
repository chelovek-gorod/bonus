import { Container, Sprite, Text } from "pixi.js"
import { sprites } from "../../engine/loader"
import { textStyles } from '../../engine/fonts'
import { useBoost, showBoostBelowPlatform, EventHub, events } from "../../engine/events"
import { BOOSTS, BALL } from "../../constants"

class BoostButton extends Container {
    constructor(type, stateData, areaData = null) {
        super()

        this.type = type
        this.stateData = stateData
        this.areaData = areaData

        this.image = new Sprite(sprites.boost_ui_buttons.textures[type])
        this.addChild(this.image)

        this.countShadow = new Sprite(sprites.boost_shadow)

        this.countText = new Text({text: 'x' + this.stateData[this.type], style: textStyles.boostCounter})
        this.countText.anchor.set(0.5)
        this.countText.position.set(96, 156)

        if ( this.stateData[this.type] > 0) this.addChild(this.countShadow, this.countText)
        
        this.eventMode = 'static'
        this.on('pointerdown', this.getClick.bind(this) )

        EventHub.on( events.getHotKey, this.getHotKey, this )
    }

    updateCount() {
        if (this.stateData[this.type] > 0) {
            this.countText.text = 'x' + this.stateData[this.type]
            this.addChild(this.countShadow, this.countText)
        } else {
            this.removeChild(this.countShadow, this.countText)
        }
    }

    getHotKey(type) {
        if (this.type === type) this.getClick()
    }

    getClick() {
        if (this.stateData[this.type] < 1) return

        if (this.areaData) {
            if(this.type === BOOSTS.slow) {
                let isUseless = true
                this.areaData.balls.children.forEach( ball => {
                    if(ball.speed > BALL.startSpeed) isUseless = false
                })
                if (isUseless) return console.log('BOOSTS slow is Useless')
            }
            else
            if(this.type === BOOSTS.power
            && this.areaData.ballPower === BALL.maxPower ) {
                return console.log('BOOSTS power is Useless')
            }
            else
            if(this.type === BOOSTS.widens
            && this.areaData.platform.size === 11 ) {
                return console.log('BOOSTS widens is Useless')
            }
        }

        this.stateData[this.type]--
        this.updateCount()
        showBoostBelowPlatform(this.type)
        useBoost(this.type)
    }
}

export default BoostButton