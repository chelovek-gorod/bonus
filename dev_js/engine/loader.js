import { Assets } from 'pixi.js'
import LoadingBar from './LoadingBar'

const paths = {
    sprites : './sprites/',
    sounds : './sounds/',
    music : './music/',
    voices : './voices/',
    fonts : './fonts/',
}

export const sprites = {
    bg_1: 'bg_1.png',

    ball: 'ball_48x48px.png',
    bullet: 'bullet_16x16px.png',

    platforms: 'platforms.json', // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (1 - w:128px; 10 - w:704px)
    side: 'side.json', // open, close
    bricks: 'bricks.json', // 1 - 5, x (infinity), 0 (transparent), t (visible), fire, bonus
    boost_pos: 'boost_pos.json', // ball, widens, triple, power, protect, shoot, slow
    boost_neg: 'boost_neg.json', // 208x186px acceleration, shrink, stop
    boost_ui_buttons: 'boost_ui_buttons.json',
    boost_shadow: 'boost_shadow.png', // 192x192px
    boost_ui_timer: 'boost_ui_timer.json', // empty ... (stop_red)
    level_ui_stars: 'level_ui_stars.json', // 1, 2, 3
    menu_button: 'menu.png', // 104x90px
    coin: 'gold_coin_64x64px.png',
    power: 'power_64x56px.png',
    ball_icon: 'ball_icon_64x64px.png',

    explosion: 'explosion.json',
}
const spritesNumber = Object.keys(sprites).length
for (let sprite in sprites) sprites[sprite] = paths.sprites + sprites[sprite]

export const sounds = {
    upgrade: 'se_upgrade.mp3',
}
const soundsNumber = Object.keys(sounds).length
for (let se in sounds) sounds[se] = paths.sounds + sounds[se]

export const voices = {
    // en_start_first: 'voice_en_start_first.mp3',
    // ru_start_first: 'voice_ru_start_first.mp3',
}
const voicesNumber = Object.keys(voices).length
for (let vs in voices) voices[vs] = paths.voices + voices[vs]

export const music = {
    bgm0: 'bgm_0.mp3',
}
for (let bgm in music) music[bgm] = paths.music + music[bgm]

export const fonts = {
    normal: 'Onest-Regular.ttf',
    medium: 'Onest-Medium.ttf',
    bold: 'Onest-SemiBold.ttf',
}
for (let font in fonts) fonts[font] = paths.fonts + fonts[font]

///////////////////////////////////////////////////////////////////

export function uploadAssets( loadingDoneCallback ) {
    const assetsNumber = spritesNumber + soundsNumber + voicesNumber
    let loadedAssets = 0
    let progressPerAsset = 100 / assetsNumber

    const loadingBar = new LoadingBar()

    const multiPacksMap = new Map()

    function updateMultiPackAnimations(sprite, animationsList) {
        // update all textures in all animations at MultiPack atlas
        for(let animationName in sprites[sprite].animations) {
            sprites[sprite].animations[animationName].forEach( (frame, index) => {
                if (!!frame) return // texture is already loaded, go to next frame
                const texture = Assets.cache.get(animationsList[animationName][index])
                sprites[sprite].animations[animationName][index] = texture
            })
        }
    }

    const loading = () => {
        loadedAssets++
        loadingBar.update(progressPerAsset * loadedAssets)
        if (loadedAssets === assetsNumber) {
            multiPacksMap.forEach( (animations, sprite) => updateMultiPackAnimations(sprite, animations) )
            multiPacksMap.clear()
            loadingBar.delete()
            loadingDoneCallback()
        }
    }

    for (let sprite in sprites) {
        Assets.add( {alias: sprite, src: sprites[sprite]} )
        Assets.load( sprite ).then(data => {
            if ('data' in data && 'related_multi_packs' in data.data.meta && 'animations' in data.data) {
                multiPacksMap.set(sprite, data.data.animations)
            }
            sprites[sprite] = data
            loading()
        })
    }

    for (let se in sounds) {
        Assets.add( {alias: se, src: sounds[se]} )
        Assets.load( se ).then(data => {
            sounds[se] = data
            loading()
        })
    }

    for (let vs in voices) {
        Assets.add( {alias: vs, src: voices[vs]} )
        Assets.load( vs ).then(data => {
            voices[vs] = data
            loading()
        })
    }
}