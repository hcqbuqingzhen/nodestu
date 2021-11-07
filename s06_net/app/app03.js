const net=require('net');

const server =net.createServer((socket => {
    console.log("client connectde");
    console.log(socket);
}));

server.listen(8888,()=>{
    console.log("start");

    const address=server.address();

    console.log(address.port+','+address.address+','+address.family);
})

