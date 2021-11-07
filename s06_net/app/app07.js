const net=require('net');
//自动设置为 'connection' 事件的监听器。
const server =net.createServer((socket => {
    console.log(socket.localPort);
    console.log(socket.localAddress);
    console.log(socket.remotePort);
    console.log(socket.remoteFamily);
    console.log(socket.remoteAddress);

}));

server.listen(8888,()=>{
    console.log("start");
})
