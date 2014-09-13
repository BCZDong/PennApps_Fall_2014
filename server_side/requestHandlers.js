
 
function getClasses(req, response) {
  console.log("Request handler 'getClasses' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
   
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
