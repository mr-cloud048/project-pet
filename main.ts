input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(signal)
    if (signal >= 80) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . # # #
            # # . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        nrg += 10
        hapiness += 5
    }
})
input.onGesture(Gesture.FreeFall, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . . . #
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        `)
    nrg += -2
    hapiness += -10
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Angry)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    hapiness += -5
})
input.onGesture(Gesture.Shake, function () {
    hapiness += -2
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . . . #
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        `)
})
input.onPinReleased(TouchPin.P1, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    hapiness += -0.1
})
let signal = 0
radio.setGroup(166)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
basic.showLeds(`
    # . # . .
    . . . . .
    . . . . .
    . . # # .
    . . # # .
    `)
basic.pause(2000)
basic.showString("Hello world!")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
let hapiness = 100
let nrg = 100
basic.forever(function () {
    if (hapiness < 25) {
        basic.showString("happiness running low")
    }
    if (nrg < 50) {
        basic.showString("energy running low")
    }
    if (hapiness == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showString("oooof!!!! I suffered emotional damage which killed me!!!!")
    }
    if (nrg == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showString("oooooof!!!!")
    }
    if (input.lightLevel() > 50) {
        basic.showLeds(`
            # # # # #
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            `)
        hapiness += -0.1
    }
    if (input.temperature() > 30) {
        basic.showLeds(`
            # . . . .
            # . # . #
            . . # . #
            . . . . .
            . # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
        nrg += -3
    }
    if (input.temperature() < 5) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
        nrg += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 3602, 1463, 171, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
