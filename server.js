var express = require('express');
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './public/')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

http.listen(port,'192.168.1.24',function () {
    console.log('listening on *:' + port);
});
