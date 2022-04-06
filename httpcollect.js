
var http = require('http');
var bl = require('bl');
// (bl)buffer list is a third party package

// 'bl' will have stream piped in to it and it will collect the data for us
// once the stream has ended a call back will be fired with the data.

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
