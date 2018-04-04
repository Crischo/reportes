/**
 * Ppdi_persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigo_persona : { type: 'string',primaryKey: true },

    numero_identificacion : { type: 'string' },

    nombre_persona : { type: 'string' },

    casillero_judicial : { type: 'string' }
  }
};

