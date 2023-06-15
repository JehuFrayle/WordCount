let button = document.getElementById('button')

button.addEventListener('click', () => {
    let frase = document.getElementById('textarea').value
    let cantidad = frase.split(' ')
    let cantidadDividida = cantidad.length
    let h2 = document.getElementById('h2')
    h2.textContent = ('Your phrase has ' + cantidadDividida + ' words')
})