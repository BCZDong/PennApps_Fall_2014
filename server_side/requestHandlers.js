
function main(req, response) {
  console.log("Request handler '/' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  //repsonse data
  var string = "homepage";
  response.end(string);
         
  response.end();
}
 
function getClasses(req, response) {
  console.log("Request handler 'getClasses' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
   
  //response data
  var string = "classes data";
  response.end(string);
         
  response.end();
}


/*
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
*/

 
exports.getClasses = getClasses;
exports.main = main;