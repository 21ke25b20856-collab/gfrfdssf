let Score = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Score = Score + 5
        basic.showNumber(Score)
    }
    if (input.buttonIsPressed(Button.B)) {
        Score = Score - 5
        basic.showNumber(Score)
    }
    if (input.isGesture(Gesture.Shake)) {
        Score = 0
        basic.showNumber(Score)
    }
})
