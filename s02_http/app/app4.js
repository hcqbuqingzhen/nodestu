const http= require("http");

let responseData='';

http.request({
    'host':'localhost',
    'port':'3000',
    'method':'get',
    'path':'/login?username=zhangsan&password=15282738'
},function(response){
    response.on('data',function(chunk){
        responseData+=chunk;
    });

    response.on('end',function(){
        console.log(responseData);
    });
}).end();