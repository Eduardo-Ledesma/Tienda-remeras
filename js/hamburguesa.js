const hamburguesa = document.querySelector('.hamburguesa');

document.addEventListener('DOMContentLoaded', () => {
    hamburguesa.addEventListener('click', mostrarMenu)
})

function mostrarMenu() {
    const navegacion = document.querySelector('.nav')

    navegacion.classList.toggle('mostrar')
}
    