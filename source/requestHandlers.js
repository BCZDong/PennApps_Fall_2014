
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
    console.log("Request handler 'getClasses' was called");
     var body = '';
    request.on('data', function(chunk) {
        body += chunk.toString('utf8');
    });
    request.on('end', function() {
        response.end();    
    });
    console.log(body);
}
 
exports.main = main;
exports.getClasses = getClasses;