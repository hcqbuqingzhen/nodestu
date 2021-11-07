const net=require('net');
//自动设置为 'connection' 事件的监听器。
const client=new net.Socket();
client.connect(8888,'localhost',()=>{
    console.log('client connect to the server');
})
client.on('data',(data)=>{

})