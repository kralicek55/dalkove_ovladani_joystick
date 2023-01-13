let Y = 0
let X = 0
basic.showLeds(`
    . . # # .
    . . # # #
    # # # # .
    # # # # .
    . # . # .
    `)
radio.setGroup(90)
basic.forever(function () {
    X = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    Y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, -100, 100)
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
})
