input.onButtonPressed(Button.A, function () {
    radio.sendValue("MuzesJet", 0)
    basic.showIcon(IconNames.No)
    basic.pause(500)
    zobraz_logo()
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
    radio.sendValue("MuzesJet", 1)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    zobraz_logo()
})
let Y = 0
let X = 0
radio.setGroup(90)
zobraz_logo()
basic.forever(function () {
    X = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -20, 20)
    Y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -50, 50)
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
})
