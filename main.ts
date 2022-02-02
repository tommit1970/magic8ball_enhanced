input.onButtonPressed(Button.A, function () {
    tilbakeMeldingsAlternativene.push("positive")
    basic.showString("A")
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    tilbakeMeldingsAlternativene.push("neutral")
    basic.showString("C")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    tilbakeMeldingsAlternativene.push("negative")
    basic.showString("B")
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    tilfeldigValg = tilbakeMeldingsAlternativene._pickRandom()
    if (tilfeldigValg == "neutral") {
        tilfeldigTall = randint(0, neutrals.length - 1)
        basic.showString("" + (neutrals[tilfeldigTall]))
        basic.pause(200)
        basic.clearScreen()
    } else if (tilfeldigValg == "negative") {
        tilfeldigTall = randint(0, negatives.length - 1)
        basic.showString("" + (negatives[tilfeldigTall]))
        basic.pause(200)
        basic.clearScreen()
    } else if (tilfeldigValg == "positive") {
        tilfeldigTall = randint(0, positives.length - 1)
        basic.showString("" + (positives[tilfeldigTall]))
        basic.pause(200)
        basic.clearScreen()
    }
    if (tilbakeMeldingsAlternativene.length >= 4) {
        tilbakeMeldingsAlternativene.pop()
        basic.showString("" + (tilbakeMeldingsAlternativene.length))
        basic.pause(100)
        basic.clearScreen()
    }
})
let tilfeldigTall = 0
let tilfeldigValg = ""
let tilbakeMeldingsAlternativene: string[] = []
let negatives: string[] = []
let positives: string[] = []
let neutrals: string[] = []
neutrals = ["0", "z", "x"]
positives = ["1", "2", "3"]
negatives = ["m", "n", "-"]
tilbakeMeldingsAlternativene = ["positive", "neutral", "negative"]
