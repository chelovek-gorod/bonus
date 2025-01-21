import { TextStyle } from "pixi.js"
import { fonts } from "./loader"

// https://pixijs.io/pixi-text-style/

export let textStyles = null

export function initFontStyles() {
    // add font family, after update font values in loader
    textStyles = {
        loading: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 72,
            fill: '#0000ff',
        
            dropShadow: true,
            dropShadowColor: '#777777',
            dropShadowBlur: 4,
            dropShadowAngle: 0,
            dropShadowDistance: 0,
        }),

        levelLoading: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 36,
            fill: '#ff00ff',
            align: 'center',
        }),
        
        gameLevel: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 64,
            fill: '#ffffff',
            align: 'left',
        }),
        gameScore: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 64,
            fill: '#00ff00',
            align: 'center',
        }),
        gameBalls: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 64,
            fill: '#0000ff',
            align: 'right',
        }),

        starsTimer: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 48,
            fill: '#ff0000',
            align: 'left',
        }),
        gameCoins: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 48,
            fill: '#ffff00',
            align: 'left',
        }),
        ballPowers: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 48,
            fill: '#ffffff',
            align: 'right',
        }),
        
        boostCounter: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 40,
            fill: '#ffff00',
            align: 'center',
        }),

        boostTimer: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 40,
            fill: '#ffffff',
            align: 'center',
        }),

        infoPrice: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 20,
            fill: '#ffffff',
            align: 'center',
        }),

        message: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 36,
            fill: '#ff0000',
            align: 'center',

            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 6,
            dropShadowAngle: 0,
            dropShadowDistance: 0,
        }),

        mobileMessage: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 32,
            fill: '#ff0000',
            align: 'center',

            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: 0,
            dropShadowDistance: 0,
        }),

        adResultMessage: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 24,
            fill: '#000000',
            align: 'center',

            dropShadow: true,
            dropShadowColor: '#00ff00',
            dropShadowBlur: 6,
            dropShadowAngle: 0,
            dropShadowDistance: 0,

            wordWrap: true,
            wordWrapWidth: 300,
        }),
        adResultButton: new TextStyle({
            fontFamily: fonts.normal,
            fontSize: 24,
            fill: '#ffffff',
            align: 'center',

            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 6,
            dropShadowAngle: 0,
            dropShadowDistance: 0,
        }),

        // EXAMPLES
        /*
        gradientText: new TextStyle({
            fontFamily: fontKeys.RobotoBlack,
            fontSize: 32,
            fill: ['#000000', '#ff0064', '#000000'],

            dropShadow: true,
            dropShadowColor: '#ffffff',
            dropShadowBlur: 6,
            dropShadowAngle: 0,
            dropShadowDistance: 0,

            wordWrap: true,
            wordWrapWidth: 400,
        }),

        textWithShadow: new TextStyle({
            fontFamily: fontKeys.RobotoBlack,
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 'normal',
            fill: ['#ff0000', '#ffff00'],
            
            stroke: '#ffffff',
            strokeThickness: 2,

            dropShadow: true,
            dropShadowColor: '#ff00ff',
            dropShadowBlur: 3,
            dropShadowDistance: 4,
            
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
        }),
        */
    }
}