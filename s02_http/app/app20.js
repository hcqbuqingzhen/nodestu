const http=require('http');
const querystring=require('querystring');
const url=require('url');

const userService=require('./userService');

//创建服务器

const server=http.createServer(
    function (request,response) {
        let data='';

        request.on('data',function (chunk) {
            data+=chunk;
        });

        request.on('end',function () {
            const requestUrl=request.url;
            const requestmethod = request.method;

            if(requestUrl.includes("login") && requestmethod==='GET'){
                const  requestParams=url.parse(requestUrl);
                console.log(requestParams);

                const queryObject=querystring.parse(requestParams.query);
                console.log(queryObject);

                const logResult=userService.login(queryObject.username,queryObject.password);
                console.log("logResult="+logResult)

                response.writeHead(200,{'Content-type':'text/html'});
                response.end("欢迎您:"+queryObject.username);
            }
        });
    }
);

server.listen(3000,function () {
    console.log("server is start listening part 3000")
})