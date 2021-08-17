input.onButtonPressed(Button.A, function () {
    if (true) {
    	
    }
})
function pantalla () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
}
let horas = 12
let minutos = 0
let segundos = 0
basic.forever(function () {
    if (segundos < 59) {
        segundos += 1
    }
})
