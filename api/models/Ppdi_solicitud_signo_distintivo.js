/**
 * Ppdi_solicitud_signo_distintivo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigo_solicitud_signo : { type: 'string',primaryKey: true },

    numero_expediente : { type: 'string', required: true },

    fecha_presentacion : { type: 'date', required: true },

    denominacion_signo : { type: 'string', required: true }
  }
};

