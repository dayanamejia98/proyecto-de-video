const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { controller } = require('./controller');

app.post('/registro', function(req, res) {
  var datos = req.body;
  controller.registro(res, datos);
})

app.post('/logueo', function(req, res) {
  var datoslogueo = req.body;
  controller.logueo(res, datoslogueo);
})

app.get('/usuarios/:id', function(req, res) {
  var id = req.params.id;
  controller.obtenerUsuario(res, id);
})

exports.app = app;