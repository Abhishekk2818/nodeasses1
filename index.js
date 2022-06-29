const http = require("http");

const server = http.createServer(function(req,res){
    res.write("<h1>This is our first server</h1>")
    res.end();

})

server.listen(5500)