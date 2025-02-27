let luz = 0
servos.P0.setAngle(0)
basic.forever(function () {
    luz = input.lightLevel()
    if (luz >= 100) {
        servos.P0.setAngle(180)
        basic.pause(800)
        servos.P0.setAngle(0)
        basic.pause(800)
    } else {
        servos.P0.stop()
    }
})
