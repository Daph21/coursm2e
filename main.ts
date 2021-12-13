makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
basic.forever(function () {
    basic.showNumber(makerbit.irButton())
    basic.pause(1000)
})
