input.onButtonPressed(Button.A, function () {
    if (10 < Nb_de_personnes) {
        Nb_de_personnes = 10
    } else {
        Nb_de_personnes += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (0 > Nb_de_personnes) {
        Nb_de_personnes = 0
    } else {
        Nb_de_personnes += -1
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
let Nb_de_personnes = 0
Nb_de_personnes = 0
basic.forever(function () {
    if (0 > Nb_de_personnes) {
        Nb_de_personnes = 0
    }
    if (10 < Nb_de_personnes) {
        Nb_de_personnes = 10
    }
    basic.showNumber(Nb_de_personnes)
    if (10 <= Nb_de_personnes) {
        basic.showString("WARNING")
    }
})
