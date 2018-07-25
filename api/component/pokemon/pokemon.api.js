'use strict';
const pokemonModel = require ('./pokemon.model');

module.exports.registrar = function(req, res){
    let nuevoPokemon = new pokemonModel({

        Nombre_pokemon : req.body.Nombre_pokemon,
        Identificacion_pokemon: req.body.Identificacion_pokemon,
        pokemontipo1: req.body.pokemontipo1,
        pokemonTipo2: req.body.pokemonTipo2,

    });

    nuevoPokemon.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'El pokemon no pudo ser registrado : ' + error
            });

        }else{
            res.json({
                success : true,
                msj : 'El pokemon ha sido registrado' 
            });
        }
    });

};

module.exports.listar_pokemon = function(req, res){
pokemonModel.find().then(
    function(pokemon){
        res.send(pokemon);
        }
    );
}; 