import { Container, Assets, Graphics } from "pixi.js"
import { EventHub, events } from '../engine/events'
import { DropShadowFilter } from 'pixi-filters'
import Brick from "./Brick"
import AnimatedBrick from "./AnimatedBrick"
import Platform from "./Platform"
import Ball from "./Ball"
import SidePoint from "./SidePoint"
import { CONST } from "../constants"
import Protect from "./Protect"

class PlayGround extends Container {
    constructor(screenData, levelNumber) {
        super()
        const levelLoaderPromise = Assets.load(`./levels/level_${levelNumber}.json`)
        levelLoaderPromise.then( this.setup.bind(this) )

        this.levelSizes = null // {width, height}
        this.screenData = screenData

        this.dropShadowFilter = new DropShadowFilter()
        this.dropShadowFilter.color = CONST.playground.shadow.color
        this.dropShadowFilter.alpha = CONST.playground.shadow.alpha
        //this.dropShadowFilter.blur = 6
        this.filters = [this.dropShadowFilter]

        this.border = new Graphics()
        this.addChild(this.border)

        this.platform = null

        this.ballPower = CONST.ball.startPower
        this.balls = new Container()
        this.addChild(this.balls)

        this.bricks = new Container()
        this.addChild(this.bricks)

        this.sidePoints = new Container()
        this.addChild(this.sidePoints)

        this.protect = new Protect()
        this.addChild(this.protect)

        EventHub.on( events.screenResize, this.screenResize, this)
    }


    screenResize(screenData) {
        if (screenData) this.screenData = screenData

        if (this.levelSizes) {
            const offsetH = (CONST.playground.offset.left + CONST.playground.offset.right)
            const offsetV = (CONST.playground.offset.top + CONST.playground.offset.bottom)
            const width = this.screenData.width - offsetH
            const height = this.screenData.height - offsetV

            const scaleX = width / this.levelSizes.width
            const scaleY = height / this.levelSizes.height
            let scale = scaleX > scaleY ? scaleY : scaleX
            if (scale > 1) scale = 1
            this.scale.set(scale)

            this.position.x = (this.screenData.width - this.levelSizes.width * scale) * 0.5
            this.position.y = (this.screenData.height - this.levelSizes.height * scale) * 0.5

            if (this.platform) this.platform.setSceneSizes(this.position.x, scale)

            this.border.clear()
            this.border.roundRect(
                -CONST.playground.border.offset,
                -CONST.playground.border.offset,
                this.levelSizes.width + CONST.playground.border.offset * 2,
                this.levelSizes.height + CONST.playground.border.offset * 2,
                CONST.playground.border.borderRadius
            )
            this.border.stroke({ width: CONST.playground.border.width, color: CONST.playground.border.color })

            this.dropShadowFilter.offset.x = CONST.playground.shadow.offset.x * scale
            this.dropShadowFilter.offset.y = CONST.playground.shadow.offset.y * scale
        }
    }

    setup(data) {
        const map = data.map
        const maxX = map[0].length * CONST.halfCeilSize
        const maxY = map.length * CONST.ceilSize

        map.forEach( (line, y) => {
            for(let i = 0; i < line.length; i++) {
                if (line[i] === '[') {
                    const cx = CONST.halfCeilSize * i + CONST.ceilSize
                    const cy = CONST.ceilSize * y + CONST.halfCeilSize
                    //const chars = line[i + 1] + line[i + 2]
                    const chars = line[i + 1]
                    switch(chars) {
                        case '0':
                        case '1':
                        case '2':
                            this.bricks.addChild( new Brick(cx, cy, chars) )
                            break;
                        case '?@':
                        case '!*':
                            this.bricks.addChild( new AnimatedBrick(cx, cy, chars) )
                            break;
                    }
                }

                if (line[i] === '(') {
                    const cx = CONST.halfCeilSize * i + CONST.halfCeilSize
                    const cy = CONST.ceilSize * y + CONST.halfCeilSize
                    if (line[i + 1] === ')') {
                        this.sidePoints.addChild( new SidePoint(cx, cy) )
                        this.protect.initPoint(cx, cy)
                    } else {
                        let size = -1
                        let index = i + 1
                        while (line[index] === '=') {
                            size++
                            index+=2
                        }
                        this.platform = new Platform(cy, size, maxX)
                        this.addChild( this.platform )
                        this.balls.addChild( new Ball(cy, maxX, maxY, this.bricks.children, this.platform) )
                    }
                }
            }
        })
        this.levelSizes = {width: maxX, height: maxY}
        this.screenResize()
    }

    addBall( count = 1 ) {
        for(let i = 0; i < count; i++) {
            this.balls.addChild(
                new Ball(
                    this.platform.position.y,
                    this.levelSizes.width, this.levelSizes.height,
                    this.bricks.children, this.platform
                )
            )
        }
    }
}

export default PlayGround