const { app } = require('./bin/routes');

app.listen(3000, function() {
  console.log('Servidor en puerto 3000');
})