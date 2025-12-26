input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 16; index++) {
        I2C_LCD1602.ShowString("FELIZ", 0, 0)
        I2C_LCD1602.ShowString("NAVIDAD", 0, 1)
        I2C_LCD1602.shr()
        basic.pause(1000)
    }
    for (let index = 0; index < 15; index++) {
        I2C_LCD1602.ShowString(" FELIZ", 16, 0)
        I2C_LCD1602.ShowString("NAVIDAD", 16, 1)
        I2C_LCD1602.shl()
        basic.pause(1000)
    }
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("Hola", 0, 0)
I2C_LCD1602.ShowString("Amigo", 0, 1)
basic.showIcon(IconNames.Butterfly)
basic.pause(1000)
basic.clearScreen()
I2C_LCD1602.clear()
