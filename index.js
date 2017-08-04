// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var path = require('path');
// var ids = require('shortid');

// var jsonPath = path.join(__dirname, 'data.json');

// console.log('starting server');
// http.createServer(function(req, res) {
//     if (req.url.charAt(req.url.length - 1) === '/') {
//         req.url = req.url.slice(0, req.url.length - 1);
//     }

//     var parsedUrl = url.parse(req.url);

//     if (parsedUrl.pathname === '/chirps' && req.method === 'GET') {
//         fs.readFile(jsonPath, function(err, file) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Could not read file');
//             }

//             res.write(file);
//             res.end();
//         });
//     } else if (parsedUrl.pathname === '/chirps' && req.method === 'POST') {
//         var chunks = '',
//             data;

//         req.on('data', function(chunk) {
//             chunks += chunk;

//             if (chunks.length > 1e6) {
//                 req.connection.destroy();
//             }

//             data = JSON.parse(chunks);
//         });

//         fs.readFile(jsonPath, 'utf-8', function(err, file) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Could not read file');
//             }

//             var arr = JSON.parse(file);

//             data.id = ids.generate();

//             arr.push(data);

//             fs.writeFile(jsonPath, JSON.stringify(arr), function(err, success) {
//                 if (err) {
//                     res.writeHead(500);
//                     res.end('Couldn\'t successfull store data');
//                 } else {
//                     res.writeHead(201, 'Created');
//                     res.end(JSON.stringify(arr));
//                 }
//             });
//         });
//     } else if (req.method === 'GET' && parsedUrl.pathname.indexOf('/chirps/one/') > -1) {
//         var lastSlashIndex = parsedUrl.pathname.lastIndexOf('/');
//         var id = parsedUrl.pathname.slice(lastSlashIndex + 1);

//         fs.readFile(jsonPath, 'utf-8', function(err, file) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Could not read file');
//             }

//             var arr = JSON.parse(file);

//             var result;

//             arr.forEach(function(a) {
//                 if (a.id === id) {
//                     result = a;
//                 }
//             });

//             if (result === undefined) {
//                 res.writeHead(404, 'NOT FOUND');
//                 res.end();
//             } else {
//                 res.writeHead(200, 'OK');
//                 res.end(JSON.stringify(result));
//             }
//         });
//     } else if (req.method === 'DELETE' && parsedUrl.pathname.indexOf('/chirps/one/') > -1) {
//         var lastSlashIndex = parsedUrl.pathname.lastIndexOf('/');
//         var id = parsedUrl.pathname.slice(lastSlashIndex + 1);

//         fs.readFile(jsonPath, 'utf-8', function(err, file) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Could not read file');
//             }

//             var arr = JSON.parse(file);

//             var deleteIndex = -1;
            
//             arr.forEach(function(a, i) {
//                 if (a.id === id) {
//                     deleteIndex = i;
//                 }
//             });
//             if (deleteIndex != -1) {
//                     arr.splice(deleteIndex, 1);
//             }
//             fs.writeFile(jsonPath, JSON.stringify(arr), function(err, success) {
//                 if (err) {
//                     res.writeHead(500);
//                     res.end('Couldn\'t successfull store data');
//                 } else {
//                     res.writeHead(201, 'Created');
//                     res.end(JSON.stringify(arr));
//                 }
//             });
//         });
//     } else if (req.method === 'PUT' && parsedUrl.pathname.indexOf('/chirps/one/') > -1) {
//         var lastSlashIndex = parsedUrl.pathname.lastIndexOf('/');
//         var id = parsedUrl.pathname.slice(lastSlashIndex + 1);

//         fs.readFile(jsonPath, 'utf-8', function(err, file) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Could not read file');
//             }

//             var arr = JSON.parse(file);

//             var result;

//             arr.forEach(function(a) {
//                 if (a.id === id) {
//                     result = a;
//                 }
//             });

//             if (result === undefined) {
//                 res.writeHead(404, 'NOT FOUND');
//                 res.end();
//             } else {
//                 res.writeHead(200, 'OK');
//                 res.end(JSON.stringify(result));
// }

//         });

//     }

// })

// .listen(3000);

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.post('/products', function (req, res) {
   
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.put('/products/:id', function (req, res) {
  
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.delete('/products/:id', function (req, res) {
  
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

.listen(3000);

// app.get('/:id'
// app.post('/products')
// app.put('/products/:id')
// app.delete('/products/:id')
