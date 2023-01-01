//* Fichero de ejecución de la aplicación backend *
require('dotenv').config();

// Importo app
const app = require('./app');

// Ejecuto el fichero database desde index.js
require('./database');

// Asigno la ejecución de la app a una función llamada `main` para poder manejar mejor la asincronía (con async await)
async function main()
 {
  // Uso el método .listen() defininiendo: puerto a escuchar (4000)
  await app.listen(4000);
  console.log('Server on port 4000');
 }

 //* Ejecución de la app
 main();

