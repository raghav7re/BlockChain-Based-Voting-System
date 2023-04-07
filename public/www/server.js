var express = require('express');
var app = express();

var options = {
  index: "login.html"
};

app.use('/', express.static('app', {index: "login.html"}));

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('my app is listening at http://%s:%s', host, port);
});