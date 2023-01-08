const express = require('express');
const app = express();
app.set('port', process.env.PORT || 4000)

app.use(express.json());

app.use('/api/adverts', require('./routes/adverts'))

module.exports = app;









