input.onButtonPressed(Button.A, function () {
    수 = 수 + 5
    basic.showString("" + (수))
})
input.onButtonPressed(Button.AB, function () {
    수 = 100
})
input.onButtonPressed(Button.B, function () {
    수 = 수 - 5
    basic.showString("" + (수))
})
let 수 = 0
수 = 100
basic.forever(function () {
    if (input.lightLevel() < 수) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            # # # # .
            # . . # .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showString("" + (input.lightLevel()))
    }
})
