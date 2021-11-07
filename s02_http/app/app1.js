var http= require("http");

var httpServer=new http.Server();

httpServer.on("request",function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end("hello js");
});

httpServer.on('connection',function () {
    console.log("connection")
});
httpServer.listen(3000,function(){
    console.log("listen");
});