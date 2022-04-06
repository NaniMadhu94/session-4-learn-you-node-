const fs = require('fs')

const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

//  fs.readdir() method takes a pathname as its first argument and a callback as its second

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})



