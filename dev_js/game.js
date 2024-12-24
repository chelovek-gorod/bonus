import { getAppScreen, sceneAdd } from './engine/application'
import { playMusic } from './engine/sound'
import Yandex from './Yandex/Yandex'
import BG from './BG/bg'
import GameScene from './game/GameScene'

const lang = navigator.language || navigator.userLanguage
let isLangRu = !!(~lang.indexOf('ru'))
export function checkLangRu() {
    return isLangRu
}

export function startGame() {
    if (Yandex.isRealYandex) isLangRu = Yandex.isLangRu

    //const savedState = Yandex ? Yandex.getSave() : null

    const screenData = getAppScreen()
    // const state = new State(savedState, isLangRu)
    // Yandex.startAutoSave( state.getStateDataForSave.bind(state) )

    sceneAdd( new BG(screenData) )

    const scene = new GameScene(screenData)
    sceneAdd( scene )

    playMusic()
}