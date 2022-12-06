input.onButtonPressed(Button.A, function () {
    music.setVolume(20)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.stopAllSounds()
    네모_neo.showColor(neopixel.colors(NeoPixelColors.Black))
    원형_neo.showColor(neopixel.colors(NeoPixelColors.Black))
})
let 네모_neo: neopixel.Strip = null
let 원형_neo: neopixel.Strip = null
원형_neo = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
네모_neo = neopixel.create(DigitalPin.P16, 64, NeoPixelMode.RGB)
원형_neo.setBrightness(20)
네모_neo.setBrightness(20)
let range_네모off_1 = 네모_neo.range(1, 15)
let range_네모on = 네모_neo.range(16, 47)
let range_네모off_2 = 네모_neo.range(48, 63)
range_네모off_1.showColor(neopixel.colors(NeoPixelColors.Black))
range_네모on.showRainbow(1, 360)
range_네모off_2.showColor(neopixel.colors(NeoPixelColors.Black))
원형_neo.showRainbow(1, 360)
