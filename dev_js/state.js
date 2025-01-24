import { EventHub, events } from './engine/events'
import { START_STATE } from './constants'

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
        this.widens = save ? save.widens : START_STATE.widens
        this.shoot = save ? save.shoot : START_STATE.shoot
        this.protect = save ? save.protect : START_STATE.protect
    }
}

export function getState(save = null) {
    if (!state) state = new State(save)
    return state
}