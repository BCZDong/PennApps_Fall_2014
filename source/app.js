var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers"),
    ys = require('util'),
    exec = require('child_process').exec;
  
var handle = {}
handle["/"] = requestHandlers.main;
handle["/getClasses"] = requestHandlers.getClasses;
handle["/timetable"] = requestHandlers.timetable;
 
var port = process.env.PORT || 8081;
console.log("ip address: " + process.env.PORT);
server.start(router.route, handle, port);
