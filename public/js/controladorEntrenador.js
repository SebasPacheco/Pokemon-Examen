'use strict';
let inputIdEntrenador = document.querySelector('#txtidEntrenador');
let inputNombreEntrenador = document.querySelector('#txtnombreEntrenador');
let inputEdad = document.querySelector('#txtedadEntrenador');
let inputGenero = document.querySelector('#txtGenero');

let botonImagenEntrenador = document.querySelector('#btnSeleccionarImagen')
let botonRegistrarEntrenador = document.querySelector('#btnRegistrarEntrenador');
botonRegistrarEntrenador.addEventListener('click', obtenerDatos);

let bError = false;


function obtenerDatos() {

    let nIdEntrenador = inputIdEntrenador.value;
    let sNombreEntrenador = inputNombreEntrenador.value;
    let nEdad = inputEdad.value;
    let sGenero = inputGenero.value;
    console.log( inputIdEntrenador.value);
    console.log( inputNombreEntrenador.value);
    console.log( inputEdad.value);
    console.log( inputGenero.value);



    let bError = validar();

    if (bError == true) {
        swal({
            title: 'Datos Incorrectos',
            text: 'No se pudo registrar al entrenador, por favor revise los espacios en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        registrarEntrenador(nIdEntrenador, sNombreEntrenador, nEdad, sGenero );
        swal({
            title: 'Datos Correctos',
            text: 'El entrenador se ha registrado correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        /*setTimeout(() => {
            window.location.href = 'listarEntrenador.html'
        }, 2000);
       */
    }
};


function validar() {

    let nIdEntrenador = inputIdEntrenador.value;
    let sNombreEntrenador = inputNombreEntrenador.value;
    let nEdad = inputEdad.value;
    let sGenero = inputGenero.value;
    let bError = false;

    let regexSoloLetras = /^[a-zA-Z]+$/;
    //let regexGenerico = /^[a-zA-Z0-9]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    // Validación del nombre de el entranador
    if (sNombreEntrenador == '' || (regexSoloLetras.test(sNombreEntrenador) == false)) {
        inputNombreEntrenador.classList.add('errorInput');
        bError = true;
    } else {
        inputNombreEntrenador.classList.remove('errorInput');
        
    }
    //Validacion del id del entrenador
    if (nIdEntrenador == '' || (regexSoloNumeros.test(nIdEntrenador) == false)) {
        inputIdEntrenador.classList.add('errorInput');
        bError = true;
    } else {
        inputIdEntrenador.classList.remove('errorInput');
        
    }
   
    //Validacion de la edad
    if (nEdad == '' || nEdad == 0 || (regexSoloNumeros.test(nEdad) == false)) {
        inputEdad.classList.add('errorInput');
        bError = true;
    } else {
        inputEdad.classList.remove('errorInput');
    }
    //validacion del genero
    if(sGenero == null){
        inputGenero.classList.add('errorInput');
        bError = true;
    }else {
        inputGenero.classList.remove('errorInput');
    }
      
    return bError;
};


function limpiarFormulario() {
    inputIdEntrenador.value = '';
    inputNombreEntrenador.value = '';
    inputEdad.value = '';
    inputGenero.value = '';
};

