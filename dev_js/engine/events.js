import { EventEmitter } from "pixi.js";

export const EventHub = new EventEmitter()

export const events = {
    screenResize: 'screenResize',
    pointerMove: 'pointerMove',

    useBoost: 'useBoost',
    addScore: 'addScore',

    turnOffStopBoost: 'turnOffStopBoost',
    turnOffProtectBoost: 'turnOffProtectBoost',
    turnOffShootBoost: 'turnOffShootBoost',
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
export function addScore(score) {
    EventHub.emit( events.addScore, score )
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

/*
USAGE

Init:
anyFunction( data )

Subscribe:
EventHub.on( events.eventKey, ( event ) => {
    // event actions 
})

*/

