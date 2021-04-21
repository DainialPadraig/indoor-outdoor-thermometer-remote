radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("remote")) {
        radio.sendNumber(input.temperature())
    }
})
radio.setGroup(17)
basic.showNumber(17)
