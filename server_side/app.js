var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers"),
    pi = require("./pi"),
    ys = require('util'),
    exec = require('child_process').exec;
  
var handle = {}
handle["/videoPlayer"] = requestHandlers.videoPlayer;
handle["/pressureReadings"] = requestHandlers.pressureReadings;
handle["/ledInputs"] = requestHandlers.ledInputs;
handle["/beginner"] = requestHandlers.beginner;
handle["/intermediate"] = requestHandlers.intermediate;
handle["/advanced"] = requestHandlers.advanced;
 
var port = process.env.PORT || 8081;
server.start(router.route, handle, port);
