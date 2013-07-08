var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file = fs.readFileSync('index.html');
var buffer = new Buffer(file);

var html = buffer.toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
