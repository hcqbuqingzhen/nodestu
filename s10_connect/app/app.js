const http=require('http');
const querystring=require('querystring');
const url=require('url');

const UserController=require('./controller/userController');

const  server=http.createServer((request,response)=>{
    let data='';
    request.on('data',(chunk)=>{
        data+=chunk;
    });
    request.on('end',()=>{
        const requestUrl=request.url;
        const requestMethod=request.method;

        console.log(requestUrl);
        //判断是登录还是
        if(requestUrl.includes('login') && requestMethod==='GET'){
            //登录 解析 获取用户名和密码
            const requestParam=url.parse(requestUrl);
            const queryObject=querystring.parse(requestParam.query);

            console.log(queryObject);

            //调用异步方法获取
            const p1=new Promise((resolve,reject)=>{
                const res=UserController.userLogin(queryObject.username,queryObject.password);
                resolve(res);
            }).then((data)=>{
                response.setHeader('Set-Cookie',['sid='+data]);
                response.writeHeader(200,{'Content-Type':'text/plain'});
                response.end('username:'+queryObject.username+',password:'+queryObject.password);
            }).catch((error)=>{
                console.log(error);
            });

            //
        }else if(requestUrl.includes('logout') && requestMethod==='GET' ){
            const messageHeaders=request.headers;
            console.log(messageHeaders);
            const cookieObject=querystring.parse(messageHeaders.cookie);
            console.log(cookieObject);

            UserController.userLogout(cookieObject.sid);
            //cookie立即失效
            response.setHeader('Set-Cookie',['sid='+cookieObject.sid+';Max-Age=0'])
            response.writeHeader(200,{'Content-Type':'text/plain'});
            response.end('user logout');
        }else {
            //其他操作则重置session
            if(!requestUrl.includes('favicon.ico')){
                const messageHeaders=request.headers;
                console.log(messageHeaders);
                const cookieObject=querystring.parse(messageHeaders.cookie);
                console.log(cookieObject);
                UserController.userOperation(cookieObject.sid);

                response.writeHeader(200,{'Content-Type':'text/plain'});
                response.end('Operation');


            }
        }
    });

});

server.listen(3000,()=>{
    console.log('server start part 3000')
})