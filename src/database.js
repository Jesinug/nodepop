const mongooseConnect = require('mongoose').connect;
const mongooseConnection = require('mongoose').connection;

      const URI = process.env.MONGODB_URI
      ? process.env.MONGODB_URI
      : 'mongodb://localhost/nodeappdbtest'

mongooseConnect(URI, {
})

// Uso el método connect() (que recibe una url) para conectarme con una instancia o servidor MongoDB
mongooseConnection;

mongooseConnection.once('open', () => {
  console.log('DB is connected')
});

