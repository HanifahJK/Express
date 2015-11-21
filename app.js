var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World Mahasiswa UTY');
  
});
app.get('/H1', function (req, res) {
  res.send('Hello World Hanifah Jannatul Khoir');
  
});
app.get('/H2', function (req, res) {
  res.send('Hello World NIM 3133111079');
  
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});