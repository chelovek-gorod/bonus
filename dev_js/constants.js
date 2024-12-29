export const CONST = {
    ceilSize: 64,
    halfCeilSize: 32,
    playground: {
        offset: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        },
        shadow: {
            offset: { x: 8, y:12 },
            color: 0x00ffff,
            alpha: 0.25
        },
        border: {
            width: 6,
            offset: 6,
            borderRadius: 32,
            color: 0xff00ff,
        },
        protector: {
            width: 12,
            color: 0x00ff00,
            alpha: 0.5
        }
    },
    ball: {
        startSpeed: 0.5,
        maxSpeed: 3,
        accRate: 1.002,
        startPower: 1,
    },
    startStat: {
        balls: 3,
        score: 0,
    },
    bulletSpeed: 2,
}