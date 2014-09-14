
var schedule = '';

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

function timetable(request, response) {
  console.log("Request handler '/timetable' was called");

  var fs = require('fs');

  //serving test html page
  var content = 'index.html';

  fs.readFile(content, function(err, contents){
    if(!err){
      response.end(contents);
    } else {
      console.dir(err);
    };
  });

}


function getClasses(req, res) {
    console.log("Request handler '/getClasses' was called");
     var body = '';
    req.on('data', function(chunk) {
        body += chunk.toString('utf8');
        console.log("received: " + body); 

        //INSERT CODE////////////////////

       
    });
    req.on('end', function() {
        console.log("test");
        res.end(); 
    });
     
}
 
exports.main = main;
exports.getClasses = getClasses;
exports.timetable = timetable;