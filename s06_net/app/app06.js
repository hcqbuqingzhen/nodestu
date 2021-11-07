const net=require('net');
//自动设置为 'connection' 事件的监听器。
const server =net.createServer((socket => {
    const address = socket.address();
    const message= 'address is '+JSON.stringify(address);

    socket.on('data',(data)=>{
        console.log(data.toString());
        console.log("message in size:"+socket.bytesRead)
    });

    socket.write(message,'utf-8',()=>{
        console.log("message out size:"+socket.bytesWritten);
    });

}));

server.listen(8888,()=>{
    console.log("start");
})
