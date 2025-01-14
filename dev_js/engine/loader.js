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
    bg_1: 'bg_1_1040x720px.png',
    bg_2: 'bg_2_960x720px.png',
    bg_3: 'bg_3_948x594px.png',
    bg_4: 'bg_4_948x594px.png',
    bg_5: 'bg_5_126x166px.png',
    bg_6: 'bg_6_408x588px.png',
    bg_7: 'bg_7_470x120px.png',
    bg_8: 'bg_8_586x586px.png',
    bg_9: 'bg_9_692x543px.png',
    bg_10: 'bg_10_626x400px.png',
    bg_11: 'bg_11_828x502px.png',
    bg_12: 'bg_12_540x832px.png',

    ball: 'ball_48x48px.png',
    bullet: 'bullet_16x16px.png',

    platforms: 'platforms.json', // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (1 - w:128px; 10 - w:704px)
    side: 'side.json', // open, close
    bricks: 'bricks.json', // 1 - 5, x (infinity), 0 (transparent), t (visible), fire, bonus
    bonuses_pos: 'bonuses_pos.json', // add_ball, add_platform_size, extra_balls, power, protection, shuts, slow
    bonuses_neg: 'bonuses_neg.json', // 208x186px acceleration, resize, stop
    bonus_ui_buttons: 'bonus_ui_buttons.json', // power, protect, add_platform_size, shuts, slow
    bonus_ui_timer: 'bonus_ui_timer.json', // empty, protect, shuts, stop (stop_red)
    level_ui_stars: 'level_ui_stars.json', // 0, 1, 2, 3
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
    //bold: 'Play-Bold.ttf',
    normal: 'Rubik80sFade-Regular.ttf',
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