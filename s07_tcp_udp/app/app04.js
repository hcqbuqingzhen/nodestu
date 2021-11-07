const dgram=require('dgram');
//udp连接服务端
const message=Buffer.from('from server');

const socket=dgram.createSocket('udp4',(message,info)=>{
    socket.send(message,0,message.length,info.port,info.address,(error,bytes)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log('server send '+bytes+' message');
    });
})

socket.bind(9999,'localhost',()=>{
    console.log('bind 9999');
});

socket.on('message',(msg,info)=>{
    console.log('server message event ');
    console.log(msg.toString());
});