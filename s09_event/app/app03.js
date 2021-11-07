const  event=require('events');

const emitter=new event();

//自定义事件,监听并发射.

emitter.on('myEvent',function myListener() {
    console.log('myListener');
});
emitter.on('myEvent',function myListener1(param1,param2) {
    console.log(`myListener1: ${param1} ${param2}`);
});
emitter.on('myEvent',function myListener2(...params) {
    console.log('myListener2:'+params.join(', '));
});

console.log(emitter.listeners('myEvent'));

//发射事件
emitter.emit('myEvent','a','b','c','d','e');