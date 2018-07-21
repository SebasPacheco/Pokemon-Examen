'use strict';

let mongoose = require('mongoose');

let entrenadorSchema = mongoose.Schema({

    Nombre_entrenador: {type: String, unique : false, required : true},
    Identificacion_entrenador: {type: String, unique : true, required : true},
    Edad: {type: Number, unique : false, required : true},
    Genero: {type: String, unique : false, required : false},

});

module.exports = mongoose.model('Entrenador',entrenadorSchema);