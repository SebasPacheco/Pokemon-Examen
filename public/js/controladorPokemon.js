'use strict';
let inputIdPokemon = document.querySelector('#txtidPokemon');
let inputNombrePokemon = document.querySelector('#txtnombrePokemon');
let inputTipo1 = document.querySelector('#txtTipo1');
let inputTipo2 = document.querySelector('#txtTipo2');

let botonImagenPokemon = document.querySelector('#btnSeleccionarImagen')
let botonRegistrarPokemon = document.querySelector('#btnRegistrarPokemon');
botonRegistrarPokemon.addEventListener('click', obtenerDatos);

let bError = false;


function obtenerDatos() {

    let nIdPokemon = inputIdPokemon.value;
    let sNombrePokemon = inputNombrePokemon.value;
    let sTipo1 = inputTipo1.value;
    let sTipo2 = inputTipo2.value;
    console.log( inputIdPokemon.value);
    console.log( inputNombrePokemon.value);
    console.log( inputTipo1.value);
    console.log( inputTipo2.value);



    let bError = validar();

    if (bError == true) {
        swal({
            title: 'Datos Incorrectos',
            text: 'No se pudo registrar el pokemon, por favor revise los espacios en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        registrarEntrenador(nIdPokemon, sNombrePokemon, sTipo1, sTipo2 );
        swal({
            title: 'Datos Correctos',
            text: 'El pokemon se ha registrado en el pokedex',
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

    let nIdPokemon = inputIdPokemon.value;
    let sNombrePokemon = inputNombrePokemon.value;
    let sTipo1 = inputTipo1.value;
    let sTipo2 = inputTipo2.value;
    let bError = false;

    //let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexGenerico = /^[a-zA-Z0-9]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    // Validación del nombre de el entranador
    if (sNombrePokemon == '' || (regexGenerico.test(sNombrePokemon) == false)) {
        inputNombrePokemon.classList.add('errorInput');
        bError = true;
    } else {
        inputNombrePokemon.classList.remove('errorInput');
        
    }
    //Validacion del id del entrenador
    if (nIdPokemon == '' || (regexSoloNumeros.test(nIdPokemon) == false)) {
        inputIdPokemon.classList.add('errorInput');
        bError = true;
    } else {
        inputIdPokemon.classList.remove('errorInput');
        
    }
   
    //Validacion de la edad
    if (sTipo1 == '' || sTipo1 == null) {
        inputTipo1.classList.add('errorInput');
        bError = true;
    } else {
        inputTipo1.classList.remove('errorInput');
    }
    //validacion del genero
    if(sTipo2 == sTipo1){
        inputTipo2.classList.add('errorInput');
        bError = true;
    }else {
        inputTipo2.classList.remove('errorInput');
    }
      
    return bError;
};


function limpiarFormulario() {
    inputIdPokemon.value = '';
    inputNombrePokemon.value = '';
    inputTipo1.value = '';
    inputTipo2.value = '';
};

