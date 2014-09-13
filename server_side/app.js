var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers"),
    ys = require('util'),
    exec = require('child_process').exec;
  
var handle = {}
handle["/getClasses"] = requestHandlers.getClasses;
 
var port = process.env.PORT || 8081;
console.log("ip address: " + process.env.PORT);
server.start(router.route, handle, port);
