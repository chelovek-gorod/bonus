import { playMusic } from './engine/sound'
import Yandex from './Yandex/Yandex'
import GameScene from './GameScene/GameScene'

const lang = navigator.language || navigator.userLanguage
let isLangRu = !!(~lang.indexOf('ru'))
export function checkLangRu() {
    return isLangRu
}

export function startGame() {
    if (Yandex.isRealYandex) isLangRu = Yandex.isLangRu

    //const savedState = Yandex ? Yandex.getSave() : null

    // const state = getState(/* savedState */)
    // Yandex.startAutoSave( state.getStateDataForSave.bind(state) )

    new GameScene(isLangRu, 1)

    //playMusic()
}