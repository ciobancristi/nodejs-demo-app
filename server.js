// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));

// routes will go here
app.get('/', function (req, res) {
  response.render('src/index.html');
})

// start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});