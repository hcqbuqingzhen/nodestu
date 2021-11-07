//child_process（子进程） fork
const { exec } = require('child_process');
const app5 = exec('node ./process06.js',(error,stdout,stderr)=>{
    if(error){
        console.log(error);
        throw error;
    }else {
        console.log(stdout.toString());
    }
});

