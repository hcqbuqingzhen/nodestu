const net=require('net');

const server =new net.Server();
server.on('connection',(socket)=>{
    console.log("client connected");


})

server.listen(8888,()=>{
    console.log("start")
    server.close()
})

server.on('close',()=>{
    console.log("close")
});

server.on('error',(error)=>{
    console.log("error")
});