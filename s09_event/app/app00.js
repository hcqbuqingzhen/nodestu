const  http=require('http');

const httpServer=http.createServer();

//绑定事件  addListen 每个事件可以绑定多个监视器,即多个回调函数.
//默认最多绑定十个回调函数
httpServer.on('request',(request,response)=>{
    if(request.url==='/'){
        console.log('on');
        response.end('end');
    }
});
// off removeListen
// removeAllListen
httpServer.listen(3000,()=>{
    console.log('start');
})