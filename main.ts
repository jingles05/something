input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showString("BYE!")
    }
})
basic.showArrow(ArrowNames.North)
basic.showIcon(IconNames.Target)
basic.showString("HELLO!")
basic.forever(function () {
	
})
