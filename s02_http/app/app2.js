var http= require("http");

var server=http.createServer(function(request,response){
    let data='';

    request.on('data',function(chunk){
        data+=chunk;
    });

    request.on('end',function(){
        let  method= request.method;
        let headers=JSON.stringify(request.headers);
        let httpVersion=request.httpVersion;
        let url=request.url;


        response.writeHead(200,{'Content-type':'text/html'});

        let responseData=method+'\n'+headers+'\n'+httpVersion+'\n'+url;
    
        response.end(responseData);
    })

   
})

server.listen(3000,"localhost");

console.log("okoko");