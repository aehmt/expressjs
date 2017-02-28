var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Roux Academy Meetups</h2>')
});


var server = app.listen(3000, function(){
  console.log('Listening on 3000');
});



// var http = require('http');
// var myServer = http.createServer(function(req, response) {
//   response.writeHead(200, {"Content-Type":"text/html"});
//   response.write('<h2>Roux Meetups</h2>');
//   response.end();
// });

// myServer.listen(3000);
// console.log("go to localhost:3000");
