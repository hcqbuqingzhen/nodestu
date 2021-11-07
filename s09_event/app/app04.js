const  event=require('events');

const emitter=new event();

//自定义事件,监听并发射.

emitter.once('newListener',function (event,listener) {
    if(event==='myEvent'){
        emitter.on('myEvent',()=>{
            console.log('hello');
        });

    }
});
emitter.on('myEvent',function () {
    console.log('world');
});
emitter.on('myEvent',function () {
    console.log('nmb');
});


//发射事件
emitter.emit('myEvent');