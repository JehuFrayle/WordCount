let button = document.getElementById('button')
let buttonL = document.getElementById('buttonL')
let pL = document.getElementById('pL')
let number = 0
let i = false

buttonL.addEventListener('click', () => {
    if (i == false) {
        i = true
        pL.textContent = (number += 1)
    }else {
        i = false
        pL.textContent = (number -= 1)
    }
    localStorage.setItem('Likes', number)
})

button.addEventListener('click', () => {
    let frase = document.getElementById('textarea').value
    let cantidad = frase.split(' ')
    let cantidadDividida = cantidad.length
    let h2 = document.getElementById('h2')
    h2.textContent = ('Su frase tiene ' + cantidadDividida + ' palabras')
})