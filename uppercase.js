var http = require('http')
    var map = require('through2-map')
    // through2-map allows you to create a transform stream using only a single
        // function that takes a chunk of data and returns a chunk of data.
    
        var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))