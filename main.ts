input.onButtonPressed(Button.A, function () {
    feedbackAlternatives.push("positive")
    basic.showString("A")
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    feedbackAlternatives.push("neutral")
    basic.showString("C")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    feedbackAlternatives.push("negative")
    basic.showString("B")
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    OLED.clear()
    tilfeldigValg = feedbackAlternatives._pickRandom()
    if (tilfeldigValg == "neutral") {
        tilfeldigTall = randint(0, neutrals.length - 1)
        OLED.writeStringNewLine(neutrals[tilfeldigTall])
    } else if (tilfeldigValg == "negative") {
        tilfeldigTall = randint(0, negatives.length - 1)
        OLED.writeStringNewLine(negatives[tilfeldigTall])
    } else if (tilfeldigValg == "positive") {
        tilfeldigTall = randint(0, positives.length - 1)
        OLED.writeStringNewLine(positives[tilfeldigTall])
    }
    if (feedbackAlternatives.length >= 4) {
        feedbackAlternatives.pop()
        basic.showString("" + (feedbackAlternatives.length))
        basic.pause(100)
        basic.clearScreen()
    }
})
function setLists () {
    neutrals = ["Det kan skje", "Vet ikke", "Muligens"]
    positives = ["Absolutt", "Ja", "Helt sikkert"]
    negatives = ["Nei", "Aldri", "Beklager"]
    feedbackAlternatives = ["positive", "neutral", "negative"]
}
let positives: string[] = []
let negatives: string[] = []
let neutrals: string[] = []
let tilfeldigTall = 0
let tilfeldigValg = ""
let feedbackAlternatives: string[] = []
setLists()
let barHeight = 0
OLED.init(128, 64)
for (let index = 0; index < 10; index++) {
    barHeight += 10
    basic.pause(100)
    OLED.drawLoading(barHeight)
}
OLED.clear()
