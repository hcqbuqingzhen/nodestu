const net=require('net');

const server =net.createServer((socket => {
    console.log("client connectde");
    server.maxConnections=2;

    server.getConnections((error ,count)=>{
        console.log('count'+count);
    });
}));

server.listen(8888,()=>{
    console.log("start");

    const address=server.address();

    console.log(address.port+','+address.address+','+address.family);
})

