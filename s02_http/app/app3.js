var http= require("http");

var server=http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end("hello js");
})

server.listen(3000,"localhost");

console.log("okoko");