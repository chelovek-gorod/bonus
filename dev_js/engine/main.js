import { Assets } from 'pixi.js'
import { fonts, uploadAssets } from './loader'
import { initFontStyles } from './fonts'
import { startGame } from '../game'
import Yandex from '../Yandex/Yandex'

// preload fonts
Assets.addBundle('fonts', fonts)
Assets.loadBundle('fonts').then( fontsData => {
    // update font values by font family
    for(let key in fontsData) fonts[key] = fontsData[key].family
    initFontStyles()
    uploadAssets( assetsLoaded )
})

function assetsLoaded() {
    if (Yandex.isReady) {
        Yandex.SDK.features.LoadingAPI?.ready()
        startGame()
    } else {
        setTimeout(assetsLoaded, 200)
    }
}