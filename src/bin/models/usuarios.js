const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioSchema = new schema({
  nombre: String,
  apelligo: String,
  correo: String,
  contrasena: String
})

var usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario;