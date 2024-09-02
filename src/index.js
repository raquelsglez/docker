//docker -> plataforma de software libre que sirve para empaquetar aplicaciones dentro de unidades 
//independientes  llamadas contenedores. Estos contenedores son mas ligeros, son portables, lo que significa que
//que se pueden ejecutar en cualquier maquina con docker instalado.
//Nos permite crear entornos de aplicacion aislados. Esto es empaquetar la aplicacion y todas 
//las dependencias en una caja, esto se puede compartir para que todo un equipo lo tenga accesible 
//y trabajar con las mimsmas versiones

const express = require('express')
const app = express()
const PORT = 3000

require('./db')

app.use('/', (req, res) => {
  res.send('Aprendiendo docker');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});