import { startTicker, stopTicker } from "../engine/application"
import { playMusic, soundGetState, soundTurnOff, soundTurnOn, stopMusic, stopVoices } from "../engine/sound"
import { encode, decode } from './decoder'

const isRealYandex = false
const leaderboardName = 'TeslaLeaderboard' // string or null

if (isRealYandex) document.head.innerHTML += '<script src="https://yandex.ru/games/sdk/v2"></script>'

// save max 100 requests per 5 minutes => 1 in 3 seconds
const saveDataTimeout = 4000 // I use save max in 4 seconds

class YandexSDK {
    constructor() {
        this.SDK = null
        this.player = null
        this.leaderboard = null

        this.autoSaveCallback = null
        this.lastSaveEncodedString = ''
        this.requestTimeStamp = Date.now()

        this.isReady = false
        
        this.isGetReword = false
        this.isLangRu = true
        this.isRealYandex = isRealYandex

        this.isSoundOnBeforeAD = true

        this.initSDK()
    }

    initSDK() {
        if (!isRealYandex) {
            this.SDK = {
                features: {
                    LoadingAPI: {ready: () => console.log('test ready')},
                    GameplayAPI: {
                        start: () => console.log('test start'),
                        stop: () => console.log('test stop')
                    }
                }
            }
            this.player = {}
            this.lastSaveEncodedString = localStorage.getItem('save')
            this.isReady = true
            return console.log('!!! NOT REAL YANDEX !!!')
        }

        if ('YaGames' in window) {
            // console.log('YaGames', {...YaGames})
            YaGames.init().then(SDK => {
                // console.log('initSDK done', {...SDK})
                this.SDK = SDK
                this.initPlayer()

                this.SDK.getLeaderboards().then(lb => this.leaderboard = lb)

                // console.log('this.SDK.environment.i18n.lang', this.SDK.environment.i18n.lang)
                this.isLangRu = (this.SDK.environment.i18n.lang === 'ru')
            })
        } else {
            setTimeout(this.initSDK.bind(this), 100)
            console.warn('YaGames not ready')
            return 
        }
    }

    initPlayer() {
        this.SDK.getPlayer().then(player => {
            // console.log('initPlayer done', player)
            this.player = player

            // max 1 request per 3 seconds
            this.player.getData().then(save => {
                // console.log('initSave done', save)
                if ('save' in save) this.lastSaveEncodedString = save.save
                this.isReady = true
            })
        })
    }

    getSave() {
        if (!this.lastSaveEncodedString) return null

        let save
        try {
            save = JSON.parse( decode(this.lastSaveEncodedString) )
        } catch {
            console.warn('ERROR in state decode')
        }
        if (this.lastSaveEncodedString) return save
    }

    saveData(save) {
        if (!this.player) return
        if (this.autoSaveCallback) return

        if (save) this.lastSaveEncodedString = encode( JSON.stringify(save) )

        // max 1 request per 3 seconds
        const currentTimeStamp = Date.now()
        //           10 000 - 4 000 =    6 000 > 3 000
        if (currentTimeStamp - saveDataTimeout > this.requestTimeStamp) {
            this.requestTimeStamp = currentTimeStamp
            
            if (isRealYandex) this.player.setData({'save' : this.lastSaveEncodedString})
            else localStorage.setItem('save', this.lastSaveEncodedString)
        } else {
            setTimeout(() => this.setData(), saveDataTimeout)
        }
    }

    startAutoSave( callback ) {
        this.autoSaveCallback = callback
        setTimeout(() => this.autoSave(), saveDataTimeout)
    }

    stopAutoSave() {
        this.autoSaveCallback = null
    }

    autoSave() {
        if (!this.autoSaveCallback) return

        const data = this.autoSaveCallback()
        const save = encode( JSON.stringify(data) )
        if (isRealYandex) this.player.setData({'save' : save})
        else localStorage.setItem('save', save)
        
        setTimeout(() => this.autoSave(), saveDataTimeout)
    }

    clearSave( callback ) {
        if (isRealYandex) this.player.setData({'save' : null})
        else localStorage.setItem('save', null)
        setTimeout(() => callback(), saveDataTimeout)
    }

    addDataToLeaderboard( data ) {
        if (!isRealYandex || !this.leaderboard) return

        this.SDK.isAvailableMethod('leaderboards.setLeaderboardScore').then( isAvailable => {
            if (isAvailable) {
                this.leaderboard.setLeaderboardScore(leaderboardName, data)
            }
        })
    }

    showRewordAd( callback ){
        if (!this.SDK) return callback(false)

        if (!isRealYandex) return callback(true)

        this.isSoundOnBeforeAD = soundGetState()
        Yandex.SDK.features.GameplayAPI.stop()

        this.SDK.adv.showRewardedVideo({
            callbacks: {
                onOpen: () => {
                    stopTicker()

                    if (this.isSoundOnBeforeAD) soundTurnOff()
                    stopMusic()
                    
                    stopVoices()
                },
                onRewarded: () => {
                    this.isGetReword = true
                },
                onClose: () => {
                    startTicker()
                    
                    if (this.isSoundOnBeforeAD) soundTurnOn()
                    playMusic()

                    if (this.isGetReword) {
                        this.isGetReword = false
                        callback(true)
                    }
                    Yandex.SDK.features.GameplayAPI.start()
                },
                onError: (e) => {
                    console.error('Error while open video ad:', e)

                    startTicker()

                    if (this.isSoundOnBeforeAD) soundTurnOn()
                    playMusic()
                    
                    callback(false)
                    Yandex.SDK.features.GameplayAPI.start()
                }
            }
        })
    }

    showBannerAd( callback ) {
        if (!this.SDK) return callback()
    
        this.SDK.adv.showFullscreenAdv({
            callbacks: {
                onClose: function(wasShown) { callback() },
                onOffline: function(wasShown) { callback() },
                onError: function(error) { callback() }
            }
        })
    }
}

let Yandex = new YandexSDK()

export default Yandex