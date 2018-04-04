/**
 * Ppdi_ciudad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
    codigo_ciudad : { type: 'string',primaryKey: true },

    codigo_provincia : { type: 'string' },

    nombre_ciudad : { type: 'string' }
  }
};

