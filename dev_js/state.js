import { EventHub, events } from './engine/events'
import { START_STATE } from './constants'

const scoreCoins = [
    1000, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 70000, 100000,
]

const starsCoins = [
    10, 20, 30, 50, 70, 100, 150, 200, 250, 300, 40000, 50000, 70000, 100000,
]

let state = null

class State {
    constructor(save = null) {
        // this.help = new Set( save ? save.help : ['button', 'auto', 'click', 'turbo', 'boost', 'spy'] )

        this.balls = save ? save.balls : START_STATE.balls
        this.score = save ? save.score : START_STATE.score
        this.coins = save ? save.coins : START_STATE.coins
        this.levelsList = save ? save.levelsList : START_STATE.levelsList

        this.slow = save ? save.slow : START_STATE.slow
        this.power = save ? save.power : START_STATE.power
        this.size = save ? save.size : START_STATE.size
        this.guns = save ? save.guns : START_STATE.guns
        this.protect = save ? save.protect : START_STATE.protect

        /*
        this.nextTimeCoins = save ? save.nextTimeCoins : START_STATE.nextTimeCoins
        this.scoreCoinsIndex = save ? save.scoreCoinsIndex : START_STATE.scoreCoinsIndex
        this.starsCoinsIndex = save ? save.starsCoinsIndex : START_STATE.starsCoinsIndex
        */
    }
}

export function getState(save = null) {
    if (!state) state = new State(save)
    return state
}