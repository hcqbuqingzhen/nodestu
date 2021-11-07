const net=require('net');
//自动设置为 'connection' 事件的监听器。
const client=new net.Socket();
client.connect(8888,'localhost',()=>{
    console.log('client connect to the server');

    client.write("message from client");
});
client.on('data',(data)=>{
    console.log("data:"+data.toString());
    client.write("hello world");
});
client.on('end',()=>{
    console.log('end')
})