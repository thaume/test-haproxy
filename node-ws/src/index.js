'use strict';

var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js containers ' + hostname + '</body></html>');
});

app.listen(3000);
console.log('Running on http://localhost');
