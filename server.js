// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);