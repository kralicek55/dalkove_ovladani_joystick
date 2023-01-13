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
    X = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -20, 20)
    Y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -50, 50)
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
})
