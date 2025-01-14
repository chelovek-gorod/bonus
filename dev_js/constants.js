export const CEIL_SIZE = 64
export const CEIL_HALF_SIZE = CEIL_SIZE * 0.5
export const BONUS_RADIUS = 96
export const BALL_RADIUS = 24
export const BALL = {
    radius: BALL_RADIUS,
    startSpeed: 0.5,
    maxSpeed: 1_000_000,
    accRate: 1.002,
    accNegativeBonusRate: 1.005,
    startPower: 1,
}
export const BONUS = {
    platformOffset: BONUS_RADIUS - BALL_RADIUS,
    acc: 0.02,
    speed: -0.5,
    scaleRate: 0.002,
}
export const GAME_AREA = {
    offset: {
        left: 10,
        right: 10,
        top: 50,
        bottom: 10,
    },
    shadow: {
        offset: { x: 8, y:12 },
        color: 0x00ffff,
        alpha: 0.25,
    },
    border: {
        width: 6,
        offset: 6,
        color: 0xff00ff,
    },
    borderRadius: 32,
    backgroundSpeed: 0.025
}
export const PROTECTOR = {
    width: 12,
    color: 0x00ff00,
    alpha: 0.5,
}
export const START_STATE = {
    balls: 3,
    score: 0,
}
export const BONUS_TIMEOUT = 12000 // 12 sec
export const BULLET_SPEED = 1
export const SHUT_TIMEOUT = 500 // 0.5 sec