'use strict';

function obtenerPokemon(){
    let listaEntrenadores = [];

    
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_pokemon',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
       listaEntrenadores = response;
      });
    
      peticion.fail(function(){
       
      });

 

    return listaEntrenadores;
};
