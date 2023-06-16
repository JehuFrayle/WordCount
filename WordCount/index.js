let button = document.getElementById('button')
let buttonL = document.getElementById('buttonL')
let p = document.getElementById('p')
let number = 1
let i = false

buttonL.addEventListener('click', () => {
    if (i == false) {
        i = true
        p.textContent = (number)
    }else {
        i = false
        p.textContent = (number - 1)
    }
})

button.addEventListener('click', () => {
    let frase = document.getElementById('textarea').value
    let cantidad = frase.split(' ')
    let cantidadDividida = cantidad.length
    let h2 = document.getElementById('h2')
    h2.textContent = ('Su frase tiene ' + cantidadDividida + ' palabras')
})