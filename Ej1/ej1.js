const $NUMERO1 = document.getElementById("numero1")
const $NUMERO2 = document.getElementById("numero2")

function sumar() {
    const num1 = parseFloat($NUMERO1.value)
    const num2 = parseFloat($NUMERO2.value)

    document.getElementById("p1").innerText = num1 + num2
}