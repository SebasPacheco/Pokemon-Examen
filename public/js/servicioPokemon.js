function registrarPokemon(nIdPokemon, sNombrePokemon, sTipo1, sTipo2){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            Nombre_pokemon : nIdPokemon,
            Identificacion_pokemon: sNombrePokemon,
            pokemontipo1: sTipo1,
            pokemonTipo2: sTipo2
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};
