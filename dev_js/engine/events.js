import { EventEmitter } from "pixi.js";

export const EventHub = new EventEmitter()

export const events = {
    screenResize: 'screenResize',
    pointerMove: 'pointerMove',

    needVoiceDoIt: 'needVoiceDoIt',

    getClick: 'getClick',
    setAutoCharge: 'setAutoCharge',
    setTurboCharge: 'setTurboCharge',
    requestAD: 'requestAD',
    requestUpgradeClick: 'requestUpgradeClick',
    requestUpgradeAuto: 'requestUpgradeAuto',
    requestStartTurbo: 'requestStartTurbo',
    responseStopTurbo: 'responseStopTurbo',

    updateUILevel: 'updateUILevel',
    updateUIPoints: 'updateUIPoints',
    updateUIClickPanel: 'updateUIClickPanel',
    updateUIAutoPanel: 'updateUIAutoPanel',
    updateUITurboPanel: 'updateUITurboPanel',
    updateUITurboTimeout: 'updateUITurboTimeout',

    updateBuildingAuto: 'updateBuildingAuto',
    updateBuildingTurbo: 'updateBuildingTurbo',
    updateTowerTurbo: 'updateTowerTurbo',
    updateTowerAuto: 'updateTowerAuto',
    updateTowerClick: 'updateTowerClick',

    spyBotGetDamage: 'spyBotGetDamage',
    showBonusUI: 'showBonusUI',

    drawCharge: 'drawCharge',
    drawSkyCharge: 'drawSkyCharge',
    timeAcceleration: 'timeAcceleration',

    setAdButtonAvailable: 'setAdButtonAvailable',
    getADBonusUI: 'getADBonusUI',
}

export function screenResize( data ) {
    EventHub.emit( events.screenResize, data )
}
export function pointerMove( data ) {
    EventHub.emit( events.pointerMove, data )
}

export function needVoiceDoIt() {
    EventHub.emit( events.needVoiceDoIt )
}

export function getClick() {
    EventHub.emit( events.getClick )
}
export function setAutoCharge() {
    EventHub.emit( events.setAutoCharge )
}
export function setTurboCharge() {
    EventHub.emit( events.setTurboCharge )
}
export function requestAD() {
    EventHub.emit( events.requestAD )
}
export function requestUpgradeClick() {
    EventHub.emit( events.requestUpgradeClick )
}
export function requestUpgradeAuto() {
    EventHub.emit( events.requestUpgradeAuto )
}
export function requestStartTurbo() {
    EventHub.emit( events.requestStartTurbo )
}
export function responseStopTurbo() {
    EventHub.emit( events.responseStopTurbo )
}

export function updateUILevel(level) {
    EventHub.emit( events.updateUILevel, level )
}
export function updateUIPoints( data ) {
    EventHub.emit( events.updateUIPoints, data )
}
export function updateUIClickPanel() {
    EventHub.emit( events.updateUIClickPanel )
}
export function updateUIAutoPanel() {
    EventHub.emit( events.updateUIAutoPanel )
}
export function updateUITurboPanel() {
    EventHub.emit( events.updateUITurboPanel )
}
export function updateUITurboTimeout(data) {
    EventHub.emit( events.updateUITurboTimeout, data )
}

export function updateBuildingAuto(data) {
    EventHub.emit( events.updateBuildingAuto, data )
}
export function updateBuildingTurbo(data) {
    EventHub.emit( events.updateBuildingTurbo, data )
}
export function updateTowerTurbo(data) {
    EventHub.emit( events.updateTowerTurbo, data )
}
export function updateTowerAuto(data) {
    EventHub.emit( events.updateTowerAuto, data )
}
export function updateTowerClick(data) {
    EventHub.emit( events.updateTowerClick, data )
}

export function spyBotGetDamage(isDestroyed) {
    EventHub.emit( events.spyBotGetDamage, isDestroyed )
}
export function showBonusUI(text) {
    EventHub.emit( events.showBonusUI, text )
}

export function drawCharge(data) {
    EventHub.emit( events.drawCharge, data )
}
export function drawSkyCharge(data) {
    EventHub.emit( events.drawSkyCharge, data )
}

export function timeAcceleration( isOn ) {
    EventHub.emit( events.timeAcceleration, isOn )
}

export function setAdButtonAvailable( isOn ) {
    EventHub.emit( events.setAdButtonAvailable, isOn )
}

export function getADBonusUI( bonus ) {
    EventHub.emit( events.getADBonusUI, bonus )
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

