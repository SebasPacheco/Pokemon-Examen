'use strict';

let mongoose = require('mongoose');

let pokemonSchema = mongoose.Schema({

    Nombre_pokemon: {type: String, unique : true, required : true},
    Identificacion_pokemon: {type: String, unique : true, required : true},
    pokemontipo1: {type: Number, unique : false, required : true},
    pokemonTipo2: {type: String, unique : false, required : false},

});

module.exports = mongoose.model('Pokemon',pokemonSchema);