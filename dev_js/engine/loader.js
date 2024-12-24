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

    dpf_1: 'dp_filter_tile_416x416px.png',
    dpf_2: 'dp_filter_tile_225x225px.png',

    platform: 'platform.json', // ball, p_0, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9
    bricks: 'bricks.json', // 00, 01 - 10, fire, bonus
    bonuses: 'bonuses.json', // size_add, size_sub, stop, speed_ball, slow_ball, protection, life, bullets, balls, power
    side: 'side.json', // open, close
    bullet: 'bullet_32x32px.png',
}
const spritesNumber = Object.keys(sprites).length
for (let sprite in sprites) sprites[sprite] = paths.sprites + sprites[sprite]

export const sounds = {
    upgrade: 'se_upgrade.mp3',
}
const soundsNumber = Object.keys(sounds).length
for (let se in sounds) sounds[se] = paths.sounds + sounds[se]

export const voices = {
    en_start_first: 'voice_en_start_first.mp3',

    ru_start_first: 'voice_ru_start_first.mp3',

}
const voicesNumber = Object.keys(voices).length
for (let vs in voices) voices[vs] = paths.voices + voices[vs]

export const music = {
    bgm0: 'bgm_0.mp3',
}
for (let bgm in music) music[bgm] = paths.music + music[bgm]

export const fonts = {
    bold: 'Play-Bold.ttf',
    normal: 'Play-Regular.ttf',
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