const mongoose = require('mongoose');

const usuario = require('./models/usuarios');

class Controller {
  constructor() {
    this.connect()
  }
  async connect() {
    try {
      await mongoose.connect('mongodb://localhost:27017/proyecto', {
        useNewUrlParser: true
      })
      console.log('Conectado a la base de datos');
    } catch(error) {
      console.log(error);
    }
  }
  registro(res, datos) {
    usuario.create(datos, function(error, nuevousuario) {
      if (error) throw error;
      res.send(nuevousuario);
    })
  }
  logueo(res, datoslogueo) {
    usuario.findOne({
      $and: [
        { correo: datoslogueo.correo },
        { contrasena: datoslogueo.contrasena }
      ]
    }, function(error, usuariologueo) {
      if (error) throw error;
      res.send(usuariologueo);
    })
  }
  obtenerUsuario(res, id) {
    usuario.findOne({
      _id: id
    }, function(error, usuario) {
      if (error) throw error;
      res.send(usuario);
    })
  }
}

exports.controller = new Controller();