var http = require("http"),
     url = require("url"),
     path = require('path'),
     fs = require('fs');
 
function start(route, handle, port) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(handle, pathname, request, response);
  }
 
http.createServer(onRequest).listen(port);
console.log("Server has started listening on port " + port);
}
 
exports.start = start;