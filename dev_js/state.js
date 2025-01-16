import { EventHub, events } from './engine/events'
import { CONST } from './constants'

const scoreCoins = [
    1000, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 70000, 100000,
]

const starsCoins = [
    10, 20, 30, 50, 70, 100, 150, 200, 250, 300, 40000, 50000, 70000, 100000,
]

class State {
    constructor(save = null, isLangRu) {
        // this.help = new Set( save ? save.help : ['button', 'auto', 'click', 'turbo', 'boost', 'spy'] )

        this.balls = save ? save.balls : CONST.startState.balls
        this.score = save ? save.score : CONST.startState.score
        this.coins = save ? save.coins : CONST.startState.coins
        this.level = save ? save.level : CONST.startState.level

        this.slow = save ? save.slow : CONST.startState.slow
        this.power = save ? save.power : CONST.startState.power
        this.size = save ? save.size : CONST.startState.size
        this.guns = save ? save.guns : CONST.startState.guns
        this.protect = save ? save.protect : CONST.startState.protect

        this.nextTimeCoins = save ? save.nextTimeCoins : CONST.startState.nextTimeCoins
        this.scoreCoinsIndex = save ? save.scoreCoinsIndex : CONST.startState.scoreCoinsIndex
        this.starsCoinsIndex = save ? save.starsCoinsIndex : CONST.startState.starsCoinsIndex
    }
}

export default State