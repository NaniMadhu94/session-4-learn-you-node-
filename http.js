var http = require('http');
var url = process.argv[2];

//  http.get() method is a shortcut for simple GET requests
http.get(url,function(response){
    response.setEncoding('utf8');
    
    response.on('data',function(data){
        console.log(data);
    });
    
    response.on('error', console.error);
    
});

