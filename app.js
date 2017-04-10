const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index);
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/peopleskill');
mongoose.connection.on('connected', function() {
  console.log('Mongoose is connected');
})

app.listen(3000, function() {
  console.log('Server is running...');
})


module.exports = app;
