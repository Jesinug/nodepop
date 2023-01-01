//* Fichero de ejecución de la aplicación backend *
require('dotenv').config();

// Importo app
const app = require('./app');

// Ejecuto el fichero database desde index.js
require('./database');

// Asigno la ejecución de la app a una función llamada `main` para poder manejar mejor la asincronía (con async await)
async function main()
 {
  // Uso el método .listen() y le paso el valor de port (definifo en app.js) con el método app.get
  await app.listen(app.get('port'));
  console.log('Server on port', app.get('port'));
 }

 //* Ejecución de la app
 main();

