export const CEIL_SIZE = 64
export const CEIL_HALF_SIZE = CEIL_SIZE * 0.5
export const BOOST_RADIUS = 96
export const BALL_RADIUS = 24
export const BALL = {
    radius: BALL_RADIUS,
    startSpeed: 0.5,
    minSpeed: 0.1,
    maxSpeed: 1_000_000,
    accRate: 1.002,
    accNegativeBoostRate: 1.5,
    slowBoostRate: 0.5,
    startPower: 1,
    maxPower: 5,
}
export const BOOSTS = {
    ball: 'ball',
    triple: 'triple',
    widens: 'widens',
    power: 'power',
    protect: 'protect',
    shoot: 'shoot',
    slow: 'slow',

    acceleration: 'acceleration',
    shrink: 'shrink',
    stop: 'stop',

    empty: 'empty'
}
export const BOOST = {
    acc: 0.02,
    speed: -0.5,
    scaleRate: 0.002,
}
export const OFFSETS = {
    screen: 10,
    mobControl: 96,
    boostButton: 32,
    boostButtonSize: 192,
    mbInfoSize: 112,
}
export const GAME_AREA = {
    shadow: {
        offset: { x: 8, y:12 },
        color: 0x00ffff,
        alpha: 0.25,
    },
    border: {
        width: 10,
        color: 0xff00ff,
    },
    borderRadius: 32,
    backgroundSpeed: 0.005
}
export const PROTECTOR = {
    width: 12,
    color: 0x00ff00,
    alpha: 0.5,
}
export const START_STATE = {
    balls: 6,
    score: 0,
    coins: 7,
    levelsList: [0], // [0,3,1] - level 1 - 3 stars; level 2 - 1 star level available - 3 (levelsList.length)
    // [0] - first study level - 0 - not passed, 1 - passed

    // boosters
    slow: 1,
    power: 2,
    size: 3,
    guns: 4,
    protect: 5,
}
export const BOOST_PROTECT_TIMEOUT = 12000 // 12 sec
export const BOOST_SHOOT_TIMEOUT = 9000 // 12 sec
export const BOOST_STOP_TIMEOUT = 3000 // 12 sec
export const BULLET_SPEED = 2 // MAX 3 !!! 16ms per frame -> 3*16 = ~48px
export const SHUT_TIMEOUT = 500 // 0.5 sec