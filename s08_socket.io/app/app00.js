const  http=require('http');
const  io=require('socket.io');
const fs=require('fs');

//用户访问 返回页面.非法url返回信息.
const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    if(request.url==='/'){
        fs.readFile('./client.html','utf-8',(error,data)=>{
            if (error){
                console.log('error');
                return;
            }else {
                response.end(data.toString());
            }
        });
    }else {
        response.end('<html><body>Error<body><html>');
    }
});

server.listen(3000,'localhost');

//使用socket.io建立长连接
const socket=io.listen(server);

//监听
socket.on('connection',(socket)=>{
    console.log('connection has start');

    socket.on('message',(message)=>{
        console.log('in message'+message);
    });
    socket.on('disconnect',()=>{
        console.log('disconnect');
    });

    socket.send('hello client');

    //自定义事件 发送
    socket.emit('serverEvent','this zi event');

    socket.on('clientEvent',(data)=>{
        console.log(data);
    });

    socket.on('guangbo',(data)=>{
        console.log(data);
        //广播一个事件
        socket.broadcast.emit('guangbo','you are good');
    })
});