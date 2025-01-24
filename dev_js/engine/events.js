import { EventEmitter } from "pixi.js";

export const EventHub = new EventEmitter()

export const events = {
    screenResize: 'screenResize',
    pointerMove: 'pointerMove',

    useBoost: 'useBoost',
    showBoostBelowPlatform: 'showBoostBelowPlatform',
    addScore: 'addScore',
    sidePointBlink: 'sidePointBlink',

    loseBall: 'loseBall',
    checkLevelClear: 'checkLevelClear',

    turnOffStopBoost: 'turnOffStopBoost',
    turnOffProtectBoost: 'turnOffProtectBoost',
    turnOffShootBoost: 'turnOffShootBoost',

    getHotKey: 'getHotKey',
    openGameMenu: 'openGameMenu',
}

export function screenResize( data ) {
    EventHub.emit( events.screenResize, data )
}
export function pointerMove( data ) {
    EventHub.emit( events.pointerMove, data )
}

export function useBoost( type ) {
    EventHub.emit( events.useBoost, type )
}
export function showBoostBelowPlatform(type) {
    EventHub.emit( events.showBoostBelowPlatform, type )
}
export function addScore(scoreData) {
    EventHub.emit( events.addScore, scoreData )
}
export function sidePointBlink() {
    EventHub.emit( events.sidePointBlink )
}

export function loseBall() {
    EventHub.emit( events.loseBall )
}
export function checkLevelClear() {
    EventHub.emit( events.checkLevelClear )
}

export function turnOffStopBoost() {
    EventHub.emit( events.turnOffStopBoost )
}
export function turnOffProtectBoost() {
    EventHub.emit( events.turnOffProtectBoost )
}
export function turnOffShootBoost() {
    EventHub.emit( events.turnOffShootBoost )
}

export function getHotKey( type ) {
    EventHub.emit( events.getHotKey, type )
}
export function openGameMenu() {
    EventHub.emit( events.openGameMenu )
}
/*
USAGE

Init:
anyFunction( data )

Subscribe:
EventHub.on( events.eventKey, ( event ) => {
    // event actions 
})

*/

