var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.write('I am Learning Cloud Developing'); // Write a response to the client
  res.end(); // End the response
}).listen(8080, function () {
  console.log('Server running at http://localhost:8080/');
});
