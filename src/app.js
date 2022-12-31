//* Fichero definidor de la aplicación backend *

// Importo express y lo asigno a constante con le mismo nombre
const express = require('express');

// Ejecuto express y asigno lo que me devuelve en constante llamada 'app' (app será el servidor)
const app = express();

// Exporto mi definición de app (el servidor)
module.exports = app;
