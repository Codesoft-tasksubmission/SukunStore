var express = require('express');
var app = express();
const port = process.argv[2] || 8080;

app.use(express.static(__dirname));

var server = app.listen(port);

console.log('Server running at http://localhost:' + port);

