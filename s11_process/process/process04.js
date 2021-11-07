//child_process（子进程） fork
const { fork } = require('child_process');
const app5 = fork('./app',{silent:true});

app5.on('message',(data)=>{
    console.log(data);
});

app5.send('hello app');