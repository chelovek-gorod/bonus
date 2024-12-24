import { EventHub, events } from './engine/events'
import { CONST } from './constants'

class State {
    constructor(save = null, isLangRu) {
        this.help = new Set( save ? save.help : ['button', 'auto', 'click', 'turbo', 'boost', 'spy'] )

        this.balls = save ? save.balls : CONST.startStat.balls
        this.score = save ? save.score : CONST.startStat.score
    }
}

export default State