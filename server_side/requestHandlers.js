	/*
function videoPlayer(response) {
  console.log("Request handler 'videoPlayer' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("hello world");
  response.end();
}
*/
 
var pi = require("./pi");
 
function pressureReadings(req, response) {
  //console.log("Request handler 'pressureReadings' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  var LF = pi.scanLF();
  var RF = pi.scanRF();
  var LH = pi.scanLH();
  var RH = pi.scanRH();
   
  var string = String(LF)  + String(RF)  + String(LH)  + String(RH) ;
  //console.log("string: "+ string);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(string);
         
  /*
  response.write(String(LF));
  response.write(String(RF));
  response.write(String(LH));
  response.write(String(RH));
  */
  response.end();
}
 
function videoPlayer(request, response) {
    var fs = require('fs');
    //console.log("Request handler 'videoPlayer' was called.");
    var content = 'index.html';
    //var content = 'video_player.html';
    fs.readFile(content,function(err,contents){
        if(!err){
            response.end(contents);
        } else {
            console.dir(err);
        };
    });
};
 
function beginner(request, response) {
  var fs = require('fs');
  //console.log("Request handler 'videoPlayer' was called.");
    var content = 'beginner.html';
    //var content = 'video_player.html';
  fs.readFile(content,function(err,contents){
    if(!err){
      response.end(contents);
    } else {
      console.dir(err);
    };
  });
};
 
function intermediate(request, response) {
  var fs = require('fs');
  //console.log("Request handler 'videoPlayer' was called.");
    var content = 'intermediate.html';
    //var content = 'video_player.html';
  fs.readFile(content,function(err,contents){
    if(!err){
      response.end(contents);
    } else {
      console.dir(err);
    };
  });
};
 
function advanced(request, response) {
  var fs = require('fs');
  //console.log("Request handler 'videoPlayer' was called.");
    var content = 'advanced.html';
    //var content = 'video_player.html';
  fs.readFile(content,function(err,contents){
    if(!err){
      response.end(contents);
    } else {
      console.dir(err);
    };
  });
};
 
function ledInputs(req, res) {
    //console.log("Request handler 'ledInputs' was called.");
    var body = '';
    req.on('data', function(chunk) {
        body += chunk.toString('utf8');
    });
    req.on('end', function() {
        //console.log(body);
    pi.sendToMbed(body);
        res.end();   
    });
  //console.log(body);
   
};
 
exports.videoPlayer = videoPlayer;
exports.pressureReadings = pressureReadings;
exports.ledInputs = ledInputs;
exports.beginner = beginner;
exports.intermediate = intermediate;
exports.advanced = advanced;
