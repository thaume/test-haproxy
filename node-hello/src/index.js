'use strict';

var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container ' + hostname + ', I think I now understand how updates work</body></html>');
});

app.listen(80);
console.log('Running on http://localhost:80');
