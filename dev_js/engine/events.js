import { EventEmitter } from "pixi.js";

export const EventHub = new EventEmitter()

export const events = {
    screenResize: 'screenResize',
    pointerMove: 'pointerMove',

    getBoostButtonClick: 'getBoostButtonClick',
    collectBoost: 'collectBoost',
    collectBall: 'collectBall',
    collectExtraBalls: 'collectExtraBalls',
}

export function screenResize( data ) {
    EventHub.emit( events.screenResize, data )
}
export function pointerMove( data ) {
    EventHub.emit( events.pointerMove, data )
}

export function getBoostButtonClick( type ) {
    EventHub.emit( events.getBoostButtonClick, type )
}
export function collectBoost( type ) {
    EventHub.emit( events.collectBoost, type )
}
export function collectBall() {
    EventHub.emit( events.collectBall )
}
export function collectExtraBalls() {
    EventHub.emit( events.collectExtraBalls )
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

