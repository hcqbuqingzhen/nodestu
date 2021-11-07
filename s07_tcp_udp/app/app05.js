const dgram=require('dgram');
//udp连接服务端
const message=Buffer.from('from client');

const socket=dgram.createSocket('udp4');

socket.send(message,0,message.length,9999,'localhost',(error,bytes)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log('clent send '+bytes+' message');
});

socket.on('message',(msg,info)=>{
    console.log('client message event ');
    socket.send(message,0,message.length,9999,'localhost',(error,bytes)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log('clent send '+bytes+' message');
    });
});