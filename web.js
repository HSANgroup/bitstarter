var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile_buf = new Buffer(255);
var len = infile_buf.length;

fs.readFile('index.html', function (err, infile_buf) {
  if (err) throw err;
  console.log(infile_buf);
});

len = infile_buf.length;
infile_buf.toString('utf8', 0, len);
app.get('/', function(request, response) {
/*  response.send(infile_buf);*/
  response.send('Reza Here to the World!!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
