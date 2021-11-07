const net=require('net');
//自动设置为 'connection' 事件的监听器。
const server =net.createServer((socket => {
    socket.on('data',(data)=>{
        console.log(data.toString());
    });
}));

server.listen(8888,()=>{
    console.log("start");
})
