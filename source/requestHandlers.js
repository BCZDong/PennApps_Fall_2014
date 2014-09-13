
function main(request, response) {
  console.log("Request handler '/' was called");

  var fs = require('fs');

  //serving test html page
  var content = 'test.html';

  fs.readFile(content, function(err, contents){
    if(!err){
      response.end(contents);
    } else {
      console.dir(err);
    };
  });

}


function getClasses(request, response) {
  console.log("Request handler 'getClasses' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
   
  //response data
  var string = "classes data";
  response.end(string);
         
  response.end();

}
 
exports.main = main;
exports.getClasses = getClasses;