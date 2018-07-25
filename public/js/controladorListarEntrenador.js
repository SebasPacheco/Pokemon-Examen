'use strict'

let botonRegistrar =document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', registrarEntrenador);
let botonAsociar = document.querySelector('#btnAsociar');
botonAsociar.addEventListener('click', Asociar);


mostrarEntrenadoress();
let inputBuscar = document.querySelector('#txtBuscar');


inputBuscar.addEventListener('keyup' , function(){
    mostrarEntrenadoress(inputBuscar.value)


});

function registrarEntrenador(){
setTimeout(() => {
    window.location.href = 'registrarEntrenador.html';
}, 0);
}

function Asociar(){
    setTimeout(() => {
        window.location.href = 'AsociarPokemonEntrenador.html';
    }, 0);
    }
    






function mostrarEntrenadoress(pBuscar){
    let listaEntrenadores = obtenerEntrenadores();
    let tbody = document.querySelector('#tblEntrenadores tbody');
    if(!pBuscar){
        pBuscar = '';
    }


    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenadores.length; i++){
        if(listaEntrenadores[i]['Nombre_entrenador'].toLowerCase().includes(pBuscar.toLowerCase())){
        let fila = tbody.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaIdentificacion= fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaGenero = fila.insertCell();

        // Registros
        //celdaOpciones.innerHTML = listaEntrenadores[i]['a'];
        celdaNombre.innerHTML = listaEntrenadores[i]['Nombre_entrenador'];
        celdaIdentificacion.innerHTML = listaEntrenadores[i]['Identificacion_entrenador'];
        celdaEdad.innerHTML = listaEntrenadores[i]['Edad'];
        celdaGenero.innerHTML = listaEntrenadores[i]['Genero'];
        
       

        let botonActivar = document.createElement('a');
        botonActivar.href = '#';
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-check-square-o');

        let botonEditar = document.createElement('a');
        botonEditar.href = '#';
        botonEditar.classList.add('fa');
        botonEditar.classList.add('fa-pencil-square-o');

     
        let botonDesactivar = document.createElement('a');
        botonDesactivar.href = '#';
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-ban');
        
    }

   }
};