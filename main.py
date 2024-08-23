def on_gesture_shake():
    global number
    number = randint(0, 3)
    if number == 0:
        basic.show_string("perteneces a  Hufflepuff")
    elif number == 1:
        basic.show_string("perteneces a  Ravenclaw")
    elif number == 2:
        basic.show_string("perteneces a  Slytherin")
    elif number == 3:
        basic.show_string("perteneces a  Gryffindor")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

number = 0
basic.show_string("Shake Me!")