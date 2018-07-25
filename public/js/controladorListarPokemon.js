'use strict'

let botonRegistrar =document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', registrarPokemon);
let botonAsociar = document.querySelector('#btnAsociar');
botonAsociar.addEventListener('click', Asociar);


mostrarPokemon();
let inputBuscar = document.querySelector('#txtBuscar');


inputBuscar.addEventListener('keyup' , function(){
    mostrarPokemon(inputBuscar.value)


});

function registrarPokemon(){
setTimeout(() => {
    window.location.href = 'registrarPokemon.html';
}, 0);
}

function Asociar(){
    setTimeout(() => {
        window.location.href = 'AsociarPokemonEntrenador.html';
    }, 0);
    }
    






function mostrarPokemon(pBuscar){
    let listaPokemon = obtenerPokemon();
    let tbody = document.querySelector('#tblPokemon tbody');
    if(!pBuscar){
        pBuscar = '';
    }


    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemon.length; i++){
        if(listaPokemon[i]['Nombre_pokemon'].toLowerCase().includes(pBuscar.toLowerCase())){
        let fila = tbody.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaIdentificacion= fila.insertCell();
        let celdaTipo1 = fila.insertCell();
        let celdaTipo2 = fila.insertCell();

        // Registros
        //celdaOpciones.innerHTML = listaPokemon[i]['a'];
        celdaNombre.innerHTML = listaPokemon[i]['Nombre_pokemon'];
        celdaIdentificacion.innerHTML = listaPokemon[i]['Identificacion_pokemon'];
        celdaTipo1.innerHTML = listaPokemon[i]['pokemontipo1'];
        celdaTipo2.innerHTML = listaPokemon[i]['pokemonTipo2'];
        
       

        let botonActivar = document.createElement('a');
        botonActivar.href = '#';
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-check-square-o');

        celdaOpciones.appendChild( botonActivar);

        let botonEditar = document.createElement('a');
        botonEditar.href = '#';
        botonEditar.classList.add('fa');
        botonEditar.classList.add('fa-pencil-square-o');

        celdaOpciones.appendChild(botonEditar);

     
        let botonDesactivar = document.createElement('a');
        botonDesactivar.href = '#';
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-ban');

        celdaOpciones.appendChild(botonDesactivar);
        
    }

   }
};