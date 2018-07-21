'use strict';
const entrenadorModel = require ('./entrenador.model');

module.exports.registrar = function(req, res){
    let nuevoEntrenador = new entrenadorModel({

        Nombre_entrenador : req.body.Nombre_entrenador,
        Identificacion_entrenador: req.body.Identificacion_entrenador,
        Edad: req.body.Edad,
        Genero: req.body.Genero,

    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'El entrandor no pudo ser registrado : ' + error
            });

        }else{
            res.json({
                success : true,
                msj : 'El entrenador ha sido registrado' 
            });
        }
    });

};

module.exports.listar_entrenadores = function(req, res){
entrenadorModel.find().then(
    function(entrenadores){
        res.send(entrenadores);
        }
    );
}; 