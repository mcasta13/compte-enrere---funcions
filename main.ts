function repeticio_LEDS (repeticions: number, pausa: number) {
    for (let index = 0; index < repeticions; index++) {
        estat_de_LEDS(1)
        basic.pause(repeticions)
    }
}
input.onButtonPressed(Button.A, function () {
    estat_de_LEDS(1000)
    repeticio_LEDS(5, 200)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
function estat_de_LEDS (pausa: number) {
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            led.toggle(index_x, index_y)
        }
        basic.pause(pausa)
    }
}
input.onButtonPressed(Button.B, function () {
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            led.unplot(index_x, Math.map(index_y, 0, 4, 4, 0))
        }
        basic.pause(1000)
    }
    repeticio_LEDS(5, 200)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
estat_de_LEDS(1)
