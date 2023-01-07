// Importo los submódulos `connect`y `connection` del módulo 'mongoose' para que maneje la conexión a MongoDB
const mongooseConnect = require('mongoose').connect;
const mongooseConnection = require('mongoose').connection;



// Creo la constante 'URI' para asignarle el lugar donde MongoDB debe conectarse. Es como decirle: "Mongo, crea una base de datos llamada 'nodeappdb'"
// 1) Asigno directamente la URI:
      // const URI =  'mongodb://localhost/nodeappdb';
// 2) Improvement: le paso el objeto `process`, ejecuto el método ènv`y localizo la variable que contiene la URI (definida en el fichero .env)
      //const URI = process.env.MONGODB_URI;
// 3) Improvement: Uso un ternario para considerar el caso de que la variable de entorno no exista en el OS
      const URI = process.env.MONGODB_URI
      ? process.env.MONGODB_URI
      : 'mongodb://localhost/nodeappdbtest'

// Aquí agrego opciones para que Mongoose se pueda conectar (con esto evitamos tener errores por consola).
mongooseConnect(URI, {
  // useNewUrlParser: true,
  // useCreateIndex:  true
})

// Uso el método connect() (que recibe una url) para conectarme con una instancia o servidor MongoDB
mongooseConnection;

// Digo a mongoose: "Una vez q exista la conexión a la base de datos, avísame por consola"
mongooseConnection.once('open', () => {
  console.log('DB is connected')
});

