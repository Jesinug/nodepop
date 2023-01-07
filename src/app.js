//* Fichero definidor de la aplicación backend *

// Importo express y lo asigno a constante con le mismo nombre
const express = require('express');

// Ejecuto express y asigno lo que me devuelve en constante llamada 'app' (app será el servidor)
const app = express();

// Settings - Nos sirve para configurar el servidor
// Convoco el método .set() que recibe una variable y un valor para asignarle. 
// Dentro app.set incluyo una validación: si process.env.PORT (variable de entorno) existe, lo tomaremos, de lo contrario definiremos el número de puerto en 4000
app.set('port', process.env.PORT || 4000)

// Middlewares - Son funciones que se ejecutan antes de que lleguen a las rutas, a las urls
app.use(express.json());

// Routes - Espacio en que mi cliente enviará sus requests y yo podré programar las respuestas de mi back
app.use('/api/users', require('./routes/users'))
app.use('/api/adverts', require('./routes/adverts'))

// Exporto mi definición de app (el servidor) creada con Express
module.exports = app;









