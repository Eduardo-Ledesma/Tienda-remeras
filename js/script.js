const formulario = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#btn-submit');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', completarForm);
})

function completarForm(e) {
    e.preventDefault();

    const nombreInput = document.querySelector('#nombre').value; 
    const apellidoInput = document.querySelector('#apellido').value; 
    const telefonoInput = document.querySelector('#telefono').value; 
    const emailInput = document.querySelector('#email').value; 
    const textAreaInput = document.querySelector('#textarea').value;
    
    if(nombreInput.trim() === '' || apellidoInput.trim() === '' || telefonoInput.trim() === '' || emailInput.trim() === '' || textAreaInput.trim() === '') {
        crearAlerta('Todos los campos son obligatorios', 'error');
        return;
    }
    if(!validarEmail(emailInput)) {
        crearAlerta('Email inválido', 'error');
        return;
    }
    enviarFormulario();
}

function crearAlerta(mensaje, tipo) {
   
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('mensaje')
    if(tipo){
        alerta.classList.add('alerta');
    } else {
        alerta.classList.add('exito');
    }

    const fieldset = document.querySelector('#fieldset');
    fieldset.insertBefore(alerta, btnSubmit);
    btnSubmit.disabled = true;
    setTimeout(() => {
        alerta.remove();
        btnSubmit.disabled = false;
    }, 2500);
    
}

function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = regex.test(email);
    return resultado;
}

function enviarFormulario() {
    const spinner = document.querySelector('#spinner');
    spinner.classList.add('spinner-flex');
    spinner.classList.remove('spinner-hidden');
    btnSubmit.disabled = true;
    setTimeout(() => {
        spinner.classList.add('spinner-hidden');
        spinner.classList.remove('spinner-flex');
        crearAlerta('Los datos han sido enviados correctamente!');
        formulario.reset();
    }, 2000);
}