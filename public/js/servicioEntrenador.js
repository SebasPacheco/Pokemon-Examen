function registrarEntrenador(nIdEntrenador, sNombreEntrenador, nEdad, sGeneroM,sGeneroF ){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            Nombre_entrenador : sNombreEntrenador,
            Identificacion_entrenador: nIdEntrenador,
            Edad: nEdad,
            Genero_masculino: sGeneroM,
            Genero_femenino: sGeneroF,
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};
