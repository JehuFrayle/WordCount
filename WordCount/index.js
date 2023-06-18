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

// Esta función se carga cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    let numberOnMemory = localStorage.getItem('Likes') // Con esto obtenemos el valor de la memoria local
    pL.textContent = numberOnMemory

    if (numberOnMemory == null) {
        pL.textContent = 0 // Si no hay nada en la memoria local, se pone 0
    }
    if(numberOnMemory > 0){
        number = Number(numberOnMemory) // Si hay algo en la memoria local, se pone ese valor
        // Se utiliza Number() para convertir el valor de la memoria local en un número, porque por defecto es un string
        i = true // Actualizamos el valor de i para no romper la lógica del botón
    }
})