//* Fichero de ejecución de la aplicación backend *

// Importo app
const app = require('./app');

//! Asigno la ejecución de la app a una función llamada `main` para poder manejar mejor la asincronía (con async await)
async function main()
 {
  // Uso el método .listen() defininiendo: puerto a escuchar (4000)
  await app.listen(4000);
  console.log('Server on port 4000');
 }

 //* Ejecución de la app
 main();

