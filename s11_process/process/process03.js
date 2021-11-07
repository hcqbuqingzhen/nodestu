//child_process（子进程）
const { spawn } = require('child_process');
const node = spawn('node',['process02']);

node.stdout.on('data',(data)=>{
    console.log('process03:::::'+data);
    console.log('process03:::::'+node.pid);
});

node.on('exit',(code,sign)=>{
    console.log(code+':'+sign);
});