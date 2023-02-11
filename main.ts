input.onButtonPressed(Button.A, function () {
    radio.sendString("ZmenMuzesJet")
})
function zobraz_logo () {
    basic.showLeds(`
        . . # # .
        . . # # #
        # # # # .
        # # # # .
        . # . # .
        `)
}
input.onButtonPressed(Button.B, function () {
    radio.sendString("ZmenVystrazne")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("Zatrub")
})
let Y = 0
let X = 0
joystickbit.initJoystickBit()
radio.setGroup(90)
zobraz_logo()
basic.forever(function () {
    X = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -20, 20)
    Y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -50, 50)
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
})
