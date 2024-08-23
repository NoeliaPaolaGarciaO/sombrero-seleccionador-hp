input.onButtonPressed(Button.A, function () {
    basic.showString("Shake Me!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Shake Me!")
})
input.onGesture(Gesture.Shake, function () {
    number = randint(0, 3)
    if (number == 0) {
        basic.showString("perteneces a  Hufflepuff")
    } else if (number == 1) {
        basic.showString("perteneces a  Ravenclaw")
    } else if (number == 2) {
        basic.showString("perteneces a  Slytherin")
    } else if (number == 3) {
        basic.showString("perteneces a  Gryffindor")
    }
})
let number = 0
basic.showString("Shake Me!")
