// Import a module
var http = require('http')
var user = require('./user.js')

// Declare an http server
http.createServer(function (req, res) {
  user.get("cesar", function(id) {
    // Write a response header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Write a response content
    //res.end('Hello World\n');`
    res.end("hello " + id);
  })
// Start the server
}).listen(1337, '127.0.0.1', function () {
  console.log("running on 127.0.0.1:1337");
})